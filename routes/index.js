const dataHandler = require('../handlers/dataHandler');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello, Hapi!';
        }
    },
    {
        method: 'POST',
        path: '/add-data',
        handler: dataHandler.addData
    }
];

module.exports = routes;
