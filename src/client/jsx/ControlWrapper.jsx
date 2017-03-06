import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as layoutActions from '../../server/lib/actions/layoutActions';

let socket;

if (typeof window !== 'undefined') {
    socket = io('/', {
        autoConnect: false
    });
}

class ControlWrapper extends React.Component {
    componentWillMount() {
        if (typeof window !== 'undefined') {
            var that = this;
            if (!this.props.layout.socket) {

                socket.on('connect', function () {
                    that.props.initSocket(socket);
                    //that.socketInitialized();
                });

                socket.open();
            }
        }
    }

    socketInitialized() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        layout: store.layout
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(layoutActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlWrapper);