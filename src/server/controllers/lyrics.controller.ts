import { NextFunction, Request, Response } from 'express';
import { lyricsService } from 'server/services';

const lyricsController = {
  getRandom: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quote = await lyricsService.getRandom();
      res.locals.data = quote;
      return next();
    } catch (error) {
      return next(error);
    }
  },
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allQuotes = await lyricsService.getAll();
      res.locals.data = allQuotes;
      return next();
    } catch (error) {
      return next(error);
    }
  },
};

export default lyricsController;
