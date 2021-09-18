/**
 * @Author: Vivek Kumar
 * @File: App.js
 */
import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';
import middlewares from './config/middlewares';
import projectRouter from './controllers/project-controller';
import path from 'path';


dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
})

const app: Express = express();


app.use(...middlewares);

app.use('/v1/api/projects',  projectRouter);

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname,'../' ,'dist-ui' , 'index.html'));
});

export default app;
