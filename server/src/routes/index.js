// Your endpoints.
import express from 'express';
import usersRouter from './users.router.js';

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
}

export { routerApi };
