import { getRandomValueFromArray } from 'server/utils/functions';
import { lyrics } from '../../data';

const lyricsService = {
  getRandom: () => getRandomValueFromArray(lyrics),
  getAll: () => lyrics,
};

export default lyricsService;
