import express from 'express';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { LocalStrategy } from './auth/strategies/local.strategy.js';
import { JwtStrategy } from './auth/strategies/jwt.strategy.js';
import { routerApi } from './routes/index.js';

const router = express.Router();
const PORT = process.env.PORT || 3000;

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());
  app.use(router);

  passport.use(LocalStrategy);
  passport.use(JwtStrategy);

  routerApi(app);

  return app;
};

const app = createApp();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
