import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import config from "../config/index.js";

const router = express.Router();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      const payload = {
        sub: user._id,
        active: user.isActive,
      }
      const token = jwt.sign(payload, config.jwtSecret);
      res
        .cookie('access_token', token,
          {
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 * 24 * 7,
          }
        )
        .json({
          user,
          token
        });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
