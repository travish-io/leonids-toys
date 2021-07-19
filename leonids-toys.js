const gameConsoles = [
  {
    id: 1,
    name: "Nintendo 64",
    releaseDate: 1996,
    manufacturer: "Nintendo",
    mediaType: "Cartridge",
    bestSellingGame: "Super Mario 64",
    GPU: "Reality Co-Processor",
    generation: 5,
    discontinued: true,
    priceNew: 239.99,
    priceUsed: 99.99,
  },

  {
    id: 2,
    name: "Playstation",
    releaseDate: 1995,
    manufacturer: "Sony Electronics",
    mediaType: "CD-ROM",
    bestSellingGame: "Gran Turismo",
    GPU: "Sony GPU",
    generation: 5,
    discontinued: true,
    priceNew: 369.99,
    priceUsed: 63.5,
  },

  {
    id: 3,
    name: "Dreamcast",
    releaseDate: 1999,
    manufacturer: "Sega",
    mediaType: "CD-ROM",
    bestSellingGame: "Sonic Adventure",
    GPU: "NEC PowerVR2",
    generation: 6,
    discontinued: true,
    priceNew: 299.99,
    priceUsed: 99.99,
  },
];

// console.log(consoles);

// for (const gameConsole of gameConsoles) {
//   console.log(
//     `The best seeling game of all time for the ${gameConsole.name} is ${gameConsole.bestSellingGame}!`
//   );
// }

const xbox = {
  id: 4,
  name: "Xbox",
  releaseDate: 2002,
  manufacturer: "Microsoft",
  mediaType: "CD-ROM",
  bestSellingGame: "Halo 2",
  GPU: "Custom Nvidia NV2A",
  generation: 6,
  discontinued: true,
  priceNew: 325.99,
  priceUsed: 109.99,
};

const gameCube = {
  id: 5,
  name: "GameCube",
  releaseDate: 2001,
  manufacturer: "Nintendo",
  mediaType: "Optical Disk",
  bestSellingGame: "Super Smash Bros. Melee",
  GPU: 'ATI "Flipper"',
  generation: 6,
  discontinued: true,
  priceNew: 350.0,
  priceUsed: 89.99,
};
// chapter 6
gameConsoles.push(xbox);
gameConsoles.push(gameCube);
// console.log(gameConsoles);

// chapter 7
// for (const gameConsole of gameConsoles) {
//   console.log(
//     `The ${gameConsole.name} was released in ${gameConsole.releaseDate}.`
//   );
// }

// chapter 8
// for (const gameConsole of gameConsoles) {
//   gameConsole.priceNew += gameConsole.priceNew * 0.05;
//   console.log(
//     `The ${gameConsole.manufacturer} ${gameConsole.name}! Now $${gameConsole.priceNew}!`
//   );
// }

// chapter 9 add 5% to price
// const idToFind = 5;

// for (const gameConsole of gameConsoles) {
//   if (gameConsole.id === idToFind) {
//     gameConsole.priceNew += Math.round(gameConsole.priceNew * 0.05);
//     gameConsole.priceUsed += Math.round(gameConsole.priceUsed * 0.05);
//     console.log(
//       `The ${gameConsole.manufacturer} ${gameConsole.name}! Now $${gameConsole.priceNew} New and $${gameConsole.priceUsed} Used!`
//     );
//   }
// }
// console.log(gameConsoles)

const addConsoleToInventory = (name) => {
  let newItem = {};
  const lastIndex = gameConsoles.length - 1;
  const currestLastConsole = gameConsoles[lastIndex];
  const newId = currestLastConsole.id + 1;
  newItem.id = newId;
  newItem.name = name;
  gameConsoles.push(newItem);
};

addConsoleToInventory("SNES");
addConsoleToInventory("Wii");

console.log(gameConsoles);
