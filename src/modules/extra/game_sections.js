import ex_schedule from './events';
import Schedule_Sections from './sections'

var dataMap = Schedule_Sections();

const Game_Sections = () => {
  let gameMap = {};
  Object.keys(dataMap).forEach((event) => {
    if (event.type === 'Games')
    {
      gameMap.push(event);
    }
  });

  return gameMap;
};

export default Game_Sections;
