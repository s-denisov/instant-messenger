import express, { Express, Request, Response } from 'express';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import connectDb from './db/connect';
import User from './db/User';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'alfkdbnbvfsakjrhjr132'
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

connectDb();

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post('/api/signup/', (req: Request, res: Response) => {
  User.register(new User({ username: req.body.email }), req.body.password, (err, user) => {
    if (err) {
      res.status(409).json({ message: { email: 'Email already taken' } });
    } else {
      req.login(user, (err2) => {
        if (err2) res.status(409).json({ message: err2 });
        else {
          res.status(201).json({ message: 'Signed up successfully' });
        }
      });
    }
  });
});

app.post('/api/login/', (req, res) => {
  User.authenticate()(req.body.email, req.body.password).catch((err) => {
    res.status(401).json({ message: 'Invalid email or password' });
  });
});

app.get('/api/username', (req, res) => {
  res.status(200).json({ username: req.user && (req.user as any).username });
});

export default app;
