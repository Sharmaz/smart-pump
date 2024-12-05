import { db } from "../db/index.js";

class UsersService {
  async find() {
    const users = await db.data.users;
    return users;
  }

  async findOne(userId) {
    const user = await db.data.users.find((user) => user._id === userId);
    return user;
  }

  async update(userId, changes) {
    const user = await this.findOne(userId);
    const updatedUser = { ...user, ...changes };
    
    await db.update(({ users }) => users.forEach((user, index) => {
      if (user._id === userId) {
        users.splice(index, 1, updatedUser);
      }
    }));
    await db.write();
    return { userId, changes};
  }

  async delete(userId) {
    await db.update(({ users }) => users.forEach((user, index) => {
      if (user._id === userId) {
        users.splice(index, 1);
      }
    }));
    await db.write();
  }
}

export { UsersService };
