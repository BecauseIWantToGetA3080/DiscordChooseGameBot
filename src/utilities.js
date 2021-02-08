export let listOfGames = [
  "COD Warzone",
  "TFT",
  "Golf With Friends",
  "Black Ops Dirty Bomb",
  "Black Ops Zombies",
  "Rocket League",
];

const chooseGame = () => {
  const gameListLength = listOfGames.length;
  const chosenIndex = Math.floor(Math.random() * gameListLength);
  const selectedGame = listOfGames[chosenIndex];

  return `The randomly chosen game is: __**${selectedGame}**__`;
};

const addGame = (msgContent) => {
  let resultArray = msgContent.split(" ");
  resultArray.splice(0, 1);
  resultArray.join(" ");
  listOfGames.push(resultArray);
  return `Game added: \`${resultArray}\``;
};

const listGames = () => {
  let msg = "";
  msg += "Current List of Options:\n";
  msg += "`------------------------\n";
  listOfGames.forEach((value) => {
    msg += `${value}\n`;
  });
  msg += "------------------------`";
  return msg;
};

const help = () => {
  let msg = "Available commands:\n";
  msg += "!choosegame\n";
  msg += "!addgame <name of game>\n";
  msg += "!listgames\n";
  msg += "!help\n";
  return msg;
};

export const invokePhrases = {
  "!choosegame": chooseGame,
  "!addgame": addGame,
  "!listgames": listGames,
  "!help": help,
};
