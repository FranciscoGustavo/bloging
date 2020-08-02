import { Router } from 'express';
import CommentsRouter from './router';
import CommentsController from "./controller";
import CommentsService from "./service";
import Comment from '../../models/comments';
import success from '../../router/success';
import requireParams from '../../utils/params/requireParams';
import validParams from '../../utils/params/validParams';

const COMMENTS = (app: any) => {
    const router = Router();
    const service = CommentsService(Comment, validParams, requireParams);
    const controller = CommentsController(service, success);


    app.use('/api/comments', router);
    CommentsRouter(router, controller);
};

export default COMMENTS;
