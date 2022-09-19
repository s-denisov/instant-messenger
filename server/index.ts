// from https://blog.logrocket.com/how-to-set-up-node-typescript-express/

import express, { Express, Request, Response } from 'express';
import passport from 'passport';
import connectDb from './db/connect';
import User from './db/User';

const app: Express = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

connectDb();

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

(async () => {
  const user = new User({ username: 'user' });
  await user.setPassword('password');
  await user.save();
})().catch((err) => console.log('User already exists'));
