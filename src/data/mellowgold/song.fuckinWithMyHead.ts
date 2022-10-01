// Melow Gold (1994)
// Fuckin With My Head

import mellowGold from './album.mellowGold';

const albumSong = { song: 'Fuckin With My Head (Mountain Dew Rock)', ...mellowGold };

const lyrics = [
  {
    lyric: 'Found myself in New Orleans With a scarecrow in my jeans.',
    ...albumSong,
  },
  {
    lyric: "Beat my forehead through the ceilin'. Drink my coffee with a hubcap.",
    ...albumSong,
  },
  {
    lyric:
      "Well, you turn my body into a crutch and now I'm limpin' all over when I feel your touch",
    ...albumSong,
  },
  {
    lyric: "Now I'm talkin' on a walkie-talkie, credit card glued to my hand.",
    ...albumSong,
  },
];

export default lyrics;
