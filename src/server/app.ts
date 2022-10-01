import express, { Router } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import lyricsRouter from './routes/lyrics.routes';
import {
  errorHandler,
  responseHandler,
  pageNotFoundHandler,
  initResLocalsHandler,
} from './middlewares';

const app = express();

function setUpAPIRoutes() {
  // Middlewares
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(initResLocalsHandler);

  app.use('/', lyricsRouter);
}

function useCustomRoute(route: string, router: Router) {
  app.use(route, router);
}

function setUpMiddlewares() {
  // Use custom response handler
  app.use(responseHandler);

  // Use custom error handler
  app.use(errorHandler);

  // Page not found
  app.use(pageNotFoundHandler);
}

export { app, useCustomRoute, setUpAPIRoutes, setUpMiddlewares };
