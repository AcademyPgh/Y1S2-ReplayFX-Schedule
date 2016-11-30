import ex_schedule from './schedule';
const Game_Sections = () => {
  let dataMap = {};
  ex_schedule().forEach((event) => {
    if (!dataMap[event.type]) {
      dataMap[event.type] = [];
    }

    dataMap[event.type].push(event);
  });
  return dataMap;
};

export default Game_Sections;
