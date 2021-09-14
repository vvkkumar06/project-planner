import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

export default [
    cors(),
    helmet(),
    morgan('dev'),
    express.json(),
    express.urlencoded({extended: true}),
    express.static("dist-ui")
]