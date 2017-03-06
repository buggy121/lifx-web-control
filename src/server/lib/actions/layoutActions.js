/**
 * Created by Dawid Kulpa on 21.02.2017.
 */


export function changeTitle(title) {
    return {
        type: 'CHANGE_WINDOW_TITLE',
        val: title
    }
}

export function initSocket(manager) {
    return {
        type: 'INIT_SOCKET',
        val: manager
    }
}