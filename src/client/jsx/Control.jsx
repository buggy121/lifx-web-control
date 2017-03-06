import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as layoutActions from '../../server/lib/actions/layoutActions';
import * as lightActions from '../../server/lib/actions/lightActions';
import Light from './components/Light.jsx';

let socket;

if (typeof window !== 'undefined') {
    socket = io('/', {
        autoConnect: false
    });
}

class Control extends React.Component {
    componentWillMount() {
        if (typeof window !== 'undefined') {
            if (!this.props.layout.socket) {
                console.log('no connection');
                setTimeout(this.waitForSocket.bind(this), 1000);
            }
        }
    }

    waitForSocket() {
        if (!this.props.layout.socket) {
            console.log('no connection');
            setTimeout(this.waitForSocket.bind(this), 3000);
        }
        else {
            this.socketInitialized();
        }
    }

    onConnectionReset() {
        console.log('connection reset');
        this.sendWelcome();
        this.startDiscovery();
    }

    socketInitialized() {
        this.props.layout.socket.on('light-response', this.onSocketResponse.bind(this));
        this.props.layout.socket.on('new-connection', this.onConnectionReset.bind(this));
        this.sendWelcome();
        this.startDiscovery();
    }

    sendWelcome() {
        console.log('welcome!');
        this.props.layout.socket.emit('welcome', {
            protocol: this.props.params.protocol
        });
    }

    onSocketResponse(data) {
        switch (data.action) {
            case 'lights-updated':
                this.onLightsUpdate(data.data);
                break;
            default:
                console.log('unknown action from server: ' + data.action);
                break;
        }
    }

    startDiscovery() {
        this.props.actions.lightActions.discoveryStart();
        this.props.layout.socket.emit('light-request', {
            protocol: this.props.params.protocol,
            action: 'discovery-start'
        });
    }

    stopDiscovery() {
        this.props.layout.socket.emit('light-request', {
            protocol: this.props.params.protocol,
            action: 'discovery-stop'
        });
        this.props.actions.lightActions.discoveryStop();
    }

    onLightsUpdate(data) {
        console.log('Lights updated!');
        this.props.actions.lightActions.updateLights(data);
    }

    render() {
        return (
            <div>


                {this.props.light.lights ? Object.keys(this.props.light.lights).map((id, i) => {
                    return (
                        <Light key={i} data={this.props.light.lights[id]} parentHandle={this}/>
                    )
                }) : ''}
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        layout: store.layout,
        light: store.light
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            layoutActions: bindActionCreators(layoutActions, dispatch),
            lightActions: bindActionCreators(lightActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);