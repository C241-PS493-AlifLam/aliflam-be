const { registerHandler, loginHandler, profileHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: registerHandler
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler
  },
  {
    method: 'GET',
    path: '/secure/profile',
    handler: profileHandler,
  }
];

module.exports = routes;
