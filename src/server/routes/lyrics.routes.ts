import { Router } from 'express';
import { lyricsController } from 'server/controllers';

const lyricsRouter = Router();

lyricsRouter.get('/', lyricsController.getRandom);
lyricsRouter.get('/all', lyricsController.getAll);

export default lyricsRouter;
