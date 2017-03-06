/**
 * Created by Dawid Kulpa on 20.02.2017.
 */

const initialState = {
    title: 'LifX Web Control',
    socket: null,
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_WINDOW_TITLE':
            return {...state, title: action.val}
            break;
        case 'INIT_SOCKET':
            return {...state, socket: action.val}
            break;
        default:
            return state;
            break;
    }
}