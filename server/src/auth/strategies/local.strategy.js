import { Strategy } from 'passport-local';
import { UsersService } from '../../services/users.service.js';

const userService = new UsersService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  }, 
  async (email, password, done) => {
    try {
      const user = await userService.findByEmail(email);
      if (!user) {
        done(null, false, { message: 'Incorrect email.' });
      }
      let isMatch = false;
      if (password === user.password) {
        isMatch = true;
      }
      if (!isMatch) {
        done(null, false, { message: 'Incorrect password.' });
      }
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export { LocalStrategy };
