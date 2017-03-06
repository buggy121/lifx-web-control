import EventEmitter from 'events';
import {Client as Lifx} from 'node-lifx';

const UPDATE_DELAY = 2000; //ms

class LifxController extends EventEmitter {

    constructor(protocol) {
        super();
        this.protocol = protocol;
    }

    init() {
        switch (this.protocol) {
            case 1:
                this.client = new Lifx();

                this.client.on('light-new', this.newLight.bind(this));
                this.client.on('light-offline', this.lightOffline.bind(this));
                this.client.on('light-online', this.lightOnline.bind(this));

                this.client.init({
                    startDiscovery: false
                });
                break;
            case 0:

                break;
        }
    }

    newLight(light) {
        var that = this;

        //var lights = {};
        console.log('new light discovered');

        Object.keys(light.client.devices).forEach((key) => {

            that.lights = {
                ...that.lights,
                [key]: {
                    id: light.client.devices[key].id,
                    label: light.client.devices[key].label,
                    status: light.client.devices[key].status
                }
            };
            that.updateLight(key);
        });

        //this.lights = lights;
    }

    updateState(state, key) {
        if (!this.compareStates(this.lights[key], state)) {
            this.lights[key] = {
                ...this.lights[key],
                label: state.label,
                power: state.power,
                color: state.color,
                updateEvent: true,
            }

            this.emit('lights-updated');
        }

        setTimeout(this.updateLight.bind(this), UPDATE_DELAY, key);
    }

    updateLight(key) {
        if (this.lights[key].status == 'on') {
            console.log('updating light: ' + key);
            var that = this;
            this.client.devices[key].getState((err, state) => {
                if (err) {
                    console.log('Error occurred: ' + err.message);
                    if(that.lights[key].status == 'on') {
                        that.updateLight(key);
                    }
                    else {
                        that.lights[key].updateEvent = false;
                    }
                    return;
                }
                that.updateState(state, key);
            })
        }
        else {
            console.log('light ' + key + 'is not reachable');
            this.lights[key].updateEvent = false;
        }
    }

    startDiscovery() {
        console.log('starting discovering');
        this.client.startDiscovery();
    }

    stopDiscovery() {
        console.log('stopping discovering');
        this.client.stopDiscovery();
    }

    lightOffline(light) {
        console.log('light has gone offline');

        this.lights[light.id].status = 'off';
    }

    lightOnline(light) {
        console.log('the light is back!');

        this.lights[light.id].status = 'on';
        if (this.lights[light.id].updateEvent === false) {
            this.updateLight(key);
        }
    }

    compareStates(oldState, newState) {
        if (oldState.label !== newState.label) {
            return false;
        }

        if (oldState.power !== newState.power) {
            return false;
        }

        var oldColor = oldState.color;
        var newColor = newState.color;

        if (oldColor.hue !== newColor.hue) {
            return false;
        }

        if (oldColor.saturation !== newColor.saturation) {
            return false;
        }

        if (oldColor.brightness !== newColor.brightness) {
            return false;
        }

        if (oldColor.kelvin !== newColor.kelvin) {
            return false;
        }

        return true;
    }

    powerOn(id) {
        this.client.devices[id].on();
    }

    powerOff(id) {
        this.client.devices[id].off();
    }

    get lights() {
        return this._lights;
    }

    set lights(obj) {
        if (obj) {
            this._lights = obj;
        }
    }
}

export default LifxController;