// from https://blog.logrocket.com/how-to-set-up-node-typescript-express/

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connect';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from "./db/User";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

connectDb();

/*
// hashing algorithm from https://stackoverflow.com/a/52171480
const cyrb53 = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

passport.use(new LocalStrategy((username, password, cb) => {
  User.findOne({ username }, (err, user) => {
    const errorMessage = 'Incorrect username or password';
    if (err) return cb(err);
    if (!user) return cb(null, false, { message: errorMessage });


  })
}))
*/