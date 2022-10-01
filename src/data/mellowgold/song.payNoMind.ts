// Mellow Gold (1994)
// Pay No Mind

import mellowGold from './album.mellowGold';

const albumSong = { song: 'Pay No Mind', ...mellowGold };

const lyrics = [
  {
    lyric: "Give the finger to the rock and roll singer as he's dancing upon your paycheck.",
    ...albumSong,
  },
  {
    lyric: 'The sales climb high through the garbage pail sky like a giant dildo crushing the sun.',
    ...albumSong,
  },
  { lyric: 'So get out your lead-pipe pipe dreams. Get out your ten-foot flags.', ...albumSong },
  {
    lyric:
      "The insects are huge and the poison's all been used and the drugs won't kill your day job.",
    ...albumSong,
  },
];

export default lyrics;
