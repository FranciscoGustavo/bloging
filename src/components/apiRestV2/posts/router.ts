import { Router } from 'express';
import { PostsRouterContract, PostsControllerContract } from './types';

export class PostsRouter implements PostsRouterContract {
  constructor(
    private router: Router,
    private controller: PostsControllerContract
  ) {
    this.router.route('/posts').get(this.controller.getAllPosts);
    this.router.route('/posts/:uid').get(this.controller.getOnePost);
  }
}