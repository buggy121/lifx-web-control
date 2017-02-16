/**
 * Created by Dawid Kulpa on 15.02.2017.
 */


module.exports = {
    actionInit: function* (next) {
        try {
            yield next;
        }
        catch (e) {
            this.status = e.status || 500;
            this.body = e.message;
            this.app.emit('error', e, this);
        }
    }
}