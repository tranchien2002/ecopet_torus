const idle = {
  images: [require('assets/sprites/alista/power.png')],

  framerate: 10,
  frames: [
    [295, 328, 94, 124, 0, 44.9, 110.1], //1
    [487, 312, 100, 129, 0, 47.77, 114.54], //2
    [452, 157, 104, 153, 0, 49.68, 135.85], //3
    [187, 298, 106, 154, 0, 50.64, 136.74], //4
    [328, 157, 122, 169, 0, 58.28, 150.06], //5
    [1, 298, 184, 157, 0, 87.9, 139.41], //6
    [312, 1, 274, 154, 0, 130.89, 136.74], //7
    [1, 1, 309, 161, 0, 147.61, 142.96], //8
    [1, 164, 325, 132, 0, 155.25, 117.21], //9
    [391, 328, 94, 124, 0, 44.9, 110.1] //10
  ],

  animations: {
    'power(8)': { frames: [0] },
    'power(9)': { frames: [1] },
    'power(6)': { frames: [2] },
    'power(7)': { frames: [3] },
    'power(4)': { frames: [4] },
    'power(5)': { frames: [5] },
    'power(3)': { frames: [6] },
    'power(1)': { frames: [7] },
    'power(10)': { frames: [8] },
    'power(2)': { frames: [9] }
  }
};
const walk = {
  images: [require('assets/sprites/alista/heal.png')],

  framerate: 8,
  frames: [
    [1, 1, 215, 133, 0, 108, 112], //1
    [190, 174, 184, 132, 0, 93, 113], //2
    [376, 305, 128, 136, 0, 65, 115], //3
    [367, 443, 126, 138, 0, 58, 117], //4
    [180, 476, 163, 160, 0, 78, 132], //5
    [185, 308, 180, 166, 0, 90, 142], //6
    [218, 1, 190, 171, 0, 95, 148], //7
    [1, 438, 177, 168, 0, 83, 148], //8
    [1, 268, 182, 168, 0, 87, 146], //9
    [1, 136, 187, 130, 0, 89, 111], //10
    [376, 174, 131, 129, 0, 66, 111], //11
    [410, 1, 95, 123, 0, 45.38, 109.22] //12
  ],

  animations: {
    'heal(1)': { frames: [0] },
    'heal(7)': { frames: [1] },
    'heal(12)': { frames: [2] },
    'heal(10)': { frames: [3] },
    'heal(2)': { frames: [4] },
    'heal(11)': { frames: [5] },
    'heal(9)': { frames: [6] },
    'heal(3)': { frames: [7] },
    'heal(6)': { frames: [8] },
    'heal(8)': { frames: [9] },
    'heal(4)': { frames: [10] },
    'heal(5)': { frames: [11] }
  }
};
const dead = {
  images: [require('assets/sprites/alista/dead.png')],

  framerate: 8,
  frames: [
    [463, 1, 125, 115, 0, 51, 103],
    [332, 1, 129, 115, 0, 56, 103],
    [590, 1, 140, 114, 0, 66.88, 101.22],
    [173, 1, 157, 116, 0, 75, 103],
    [1, 1, 170, 116, 0, 83, 103],
    [732, 1, 100, 112, 0, 53, 102]
  ],

  animations: {
    'dead(8)': { frames: [0] },
    'dead(7)': { frames: [1] },
    'dead(5)': { frames: [2] },
    'dead(4)': { frames: [3] },
    'dead(6)': { frames: [4] },
    'dead(9)': { frames: [5] }
  }
};
const alista2 = {
  idle,
  walk,
  dead
};
export default alista2;