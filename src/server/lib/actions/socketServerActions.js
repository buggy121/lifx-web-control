import LifxController from './LifxController';

let Lifx;

function socketController(connection) {
    console.log('connection established!');
    let protocol = -1;
    if (!Lifx) {
        connection.emit('new-connection', {});
    }

    connection.on('welcome', function (data) {
        protocol = (data.protocol == 'lan') ? 1 : 0;

        if (!Lifx) {
            Lifx = new LifxController(protocol);
            Lifx.on('lights-updated', function () {
                console.log(Lifx.lights);
                connection.emit('light-response', {action: 'lights-updated', data: Lifx.lights});
            });
            Lifx.init();
        }
        else {
            Lifx.on('lights-updated', function () {
                console.log(Lifx.lights);
                connection.emit('light-response', {action: 'lights-updated', data: Lifx.lights});
            });
            connection.emit('light-response', {action: 'lights-updated', data: Lifx.lights});
        }
    });

    connection.on('light-request', function (request) {
        switch (request.action) {
            case 'discovery-start':
                Lifx.startDiscovery();
                break;
            case 'discovery-stop':
                Lifx.stopDiscovery();
                break;
            case 'power-on':
                Lifx.powerOn(request.data.id);
                break;
            case 'power-off':
                Lifx.powerOff(request.data.id);
                break;
        }
    });

    connection.on('disconnect', function () {
        console.log('disconnected');
        if (Lifx) {
            Lifx.stopDiscovery();
        }
    })
}

export default socketController;

