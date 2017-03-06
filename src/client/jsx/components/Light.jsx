import React from 'react';
import SwitchButton from 'rc-switch';
import {Col} from 'react-bootstrap';

class Light extends React.Component {

    onChange() {
        if (this.props.data.power) {
            this.props.parentHandle.props.actions.lightActions.powerOff(this.props.data.id);
            this.props.parentHandle.props.layout.socket.emit('light-request', {
                action: 'power-off',
                data: {
                    id: this.props.data.id
                }
            });
        }
        else {
            this.props.parentHandle.props.actions.lightActions.powerOn(this.props.data.id);
            this.props.parentHandle.props.layout.socket.emit('light-request', {
                action: 'power-on',
                data: {
                    id: this.props.data.id
                }
            });
        }
    }

    render() {

        return (
            <Col sm={2}>
                <div className="light-wrapper text-center">
                    <div className={"bulb-icon " + (this.props.data.power ? 'on' : 'off')}>
                        <div className="icon"/>
                        <img className="img-responsive" src="/img/bulb.png"/>
                    </div>
                    <h2>{this.props.data.label}</h2>
                    <SwitchButton checked={this.props.data.power ? true : false} onChange={this.onChange.bind(this)}/>
                </div>
            </Col>
        )
    }
}

export default Light;