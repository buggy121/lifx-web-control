/**
 * Created by Dawid Kulpa on 27.02.2017.
 */

export function discoveryStart() {
    return {
        type: 'DISCOVERING_START'
    }
}

export function discoveryStop() {
    return {
        type: 'DISCOVERING_STOP'
    }
}

export function updateLights(data) {
    return {
        type: 'LIGHTS_UPDATED',
        val: data
    }
}

export function powerOn(id) {
    return {
        type: 'POWER_ON',
        val: id
    }
}

export function powerOff(id) {
    return {
        type: 'POWER_OFF',
        val: id
    }
}