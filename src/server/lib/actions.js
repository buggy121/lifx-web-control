/**
 * Created by Dawid Kulpa on 15.02.2017.
 */

module.exports = {
    index: function* (next) {
        this.status = 200;
        this.body = 'index';
    }
}