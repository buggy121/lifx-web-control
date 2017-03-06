/**
 * Created by Dawid Kulpa on 27.02.2017.
 */

const initialState = {
    discovering: false,
    lights: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'DISCOVERING_START':
            return {...state, discovering: true}
            break;
        case 'DISCOVERING_STOP':
            return {...state, discovering: false}
            break;
        case 'LIGHTS_UPDATED':
            return {...state, lights: action.val}
            break;
        case 'POWER_ON':
            return {...state, lights: {
                ...state.lights,
                [action.val]: {
                    ...state.lights[action.val],
                    power: 1
                }
            }}
            break;
        case 'POWER_OFF':
            return {...state, lights: {
                ...state.lights,
                [action.val]: {
                    ...state.lights[action.val],
                    power: 0
                }
            }}
            break;
        default:
            return state;
            break;
    }
}