/**
 * Created by Dawid Kulpa on 20.02.2017.
 */

const initialState = {
    title: 'LifX Web Control',
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_TITLE':
            return {...state, title: action.val}
            break;
        default:
            return state;
            break;
    }
}