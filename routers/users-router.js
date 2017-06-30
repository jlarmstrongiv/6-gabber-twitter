const express = require('express')
  , routerHelpers = require('./router-helpers')
  , usersController = require('../controllers/users-controller');

module.exports = function (app) {
  const usersRouter = express.Router();

  usersRouter.get('/login', routerHelpers.debugMiddleware, usersController.getLogin);
  usersRouter.get('/signup', routerHelpers.debugMiddleware, usersController.getSignup);
  usersRouter.post('/signout', routerHelpers.debugMiddleware, usersController.postSignout);
  usersRouter.post('/login', routerHelpers.debugMiddleware, usersController.postLogin);

  app.use('/users', usersRouter);
};
