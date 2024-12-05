import express from "express";
import { UsersService } from "../services/users.service.js";

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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findOne(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const updatedUser = await userService.update(id, body);
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await userService.delete(id);
    res.status(204).json();
  } catch (error) {
    console.log(error);
  }
});


export default router;
