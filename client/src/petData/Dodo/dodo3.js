const idle = {
  images: [require('assets/sprites/dodo/attack.png')],

  framerate: 10,
  frames: [
    [296, 880, 236, 205, 0, 107, 143], //1
    [(646, 1, 258, 206, 0, 124, 149)], //2
    [1, 233, 314, 207, 0, 179, 151], //3
    [603, 650, 307, 206, 0, 172, 154], //3.1
    [303, 453, 298, 213, 0, 162, 157], //4
    [1, 442, 300, 212, 0, 163, 161], //5
    [1, 656, 296, 213, 0, 156, 154], //6
    [299, 668, 300, 210, 0, 164, 156], //7
    [1, 871, 293, 213, 0, 157, 154], //8
    [1, 1, 315, 230, 0, 177, 157], //9
    [318, 223, 310, 228, 0, 181, 156], //10
    [630, 423, 303, 225, 0, 179, 153], //11
    [318, 1, 326, 220, 0, 188, 153], //12
    [646, 209, 244, 212, 0, 114, 145], //13
    [601, 858, 236, 208, 0, 109, 146] //14
  ],

  animations: {
    'attack(9)': { frames: [0] },
    'attack(12)': { frames: [1] },
    'attack(2)': { frames: [2] },
    'attack(13)': { frames: [3] },
    'attack(10)': { frames: [4] },
    'attack(11)': { frames: [5] },
    'attack(3)': { frames: [6] },
    'attack(5)': { frames: [7] },
    'attack(4)': { frames: [8] },
    'attack(6)': { frames: [9] },
    'attack(3.1)': { frames: [10] },
    'attack(7)': { frames: [11] },
    'attack(8)': { frames: [12] },
    'attack(14)': { frames: [13] },
    'attack(1)': { frames: [14] }
  }
};
const walk = {
  images: [require('assets/sprites/dodo/power.png')],

  framerate: 10,
  frames: [
    [770, 1, 236, 204, 0, 107, 145], //1
    [531, 1, 237, 202, 0, 109, 144], //2
    [1272, 1, 254, 212, 0, 116, 153], //3
    [1008, 1, 262, 211, 0, 119, 153], //4
    [1528, 1, 265, 215, 0, 119, 157], //5
    [1, 205, 270, 221, 0, 124, 160], //6
    [273, 205, 273, 223, 0, 125, 160], //7
    [548, 207, 275, 226, 0, 128, 164], //8
    [1379, 218, 278, 239, 0, 130, 163], //9
    [1101, 215, 276, 236, 0, 127, 163], //10
    [825, 214, 274, 234, 0, 126, 163], //11
    [1, 1, 268, 198, 0, 122, 156], //12
    [271, 1, 258, 202, 0, 113, 152] //13
  ],

  animations: {
    'power(12)': { frames: [0] },
    'power(13)': { frames: [1] },
    'power(2)': { frames: [2] },
    'power(1)': { frames: [3] },
    'power(4)': { frames: [4] },
    'power(3)': { frames: [5] },
    'power(5)': { frames: [6] },
    'power(6)': { frames: [7] },
    'power(7)': { frames: [8] },
    'power(8)': { frames: [9] },
    'power(11)': { frames: [10] },
    'power(10)': { frames: [11] },
    'power(9)': { frames: [12] }
  }
};
const dead = {
  images: [require('assets/sprites/dodo/dead.png')],

  framerate: 20,
  frames: [
    [267, 1, 235, 208, 0, 117.5, 208], //1
    [1, 622, 264, 188, 0, 132, 188], //2
    [1, 429, 264, 191, 0, 132, 191], //3
    [1, 812, 263, 196, 0, 131.5, 196], //4
    [1, 225, 264, 202, 0, 132, 202], //5
    [1, 1, 264, 222, 0, 132, 222], //6
    [266, 812, 151, 128, 0, 75.5, 128], //7
    [267, 686, 147, 119, 0, 73.5, 119], //8,
    [267, 566, 156, 118, 0, 78, 118], //9
    [267, 445, 166, 119, 0, 83, 119], //10
    [267, 325, 174, 118, 0, 87, 118], //11
    [267, 211, 176, 112, 0, 88, 112] //12
  ],

  animations: {
    'dead(6)': { frames: [0] },
    'dead(1)': { frames: [1] },
    'dead(12)': { frames: [2] },
    'dead(5)': { frames: [3] },
    'dead(11)': { frames: [4] },
    'dead(3)': { frames: [5] },
    'dead(10)': { frames: [6] },
    'dead(9)': { frames: [7] },
    'dead(2)': { frames: [8] },
    'dead(4)': { frames: [9] },
    'dead(7)': { frames: [10] },
    'dead(8)': { frames: [11] }
  }
};
const dodo1 = {
  idle,
  walk,
  dead
};
export default dodo1;