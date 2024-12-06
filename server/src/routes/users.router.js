import express from "express";
import passport from "passport";
import { UsersService } from "../services/users.service.js";
import { checkUserId, checkIsActive } from "../middlewares/auth.handler.js";


const router = express.Router();
const userService = new UsersService();

router.get('/', async (req, res) => {
  try {
    const users = await userService.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  checkUserId,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkUserId,
  checkIsActive,
  async (req, res, next) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const updatedUser = await userService.update(id, body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkUserId,
  checkIsActive,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await userService.delete(id);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
);

export default router;
