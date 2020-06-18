import { Application } from 'express';
import API from '../components/api/router';
import POSTS from '../components/posts/router';
import USERS from '../components/users';
import AUTH from '../components/auth';
import UPLOADS from '../components/uploads';

const ROUTER = (app: Application): void => {
  API(app);
  POSTS(app);
  USERS(app);
  AUTH(app);
  UPLOADS(app);
};

export default ROUTER;
