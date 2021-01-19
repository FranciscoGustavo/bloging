import { Router } from 'express';
import passport from 'passport';
import { UsersController } from './controller';

export class UsersRouter {
  constructor(
    private router: Router,
    private controller: UsersController
  ) {    
    this.router.route('/users/posts')
      .get(this.controller.findAllPosts)
      .post(
        passport.authenticate('jwt', { session: false }),
        this.controller.createPost
      );
    
    this.router.route('/users')
      .get((req, res) => res.send('HI'));
  }
}