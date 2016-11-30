import ex_schedule from './schedule';
const Game_Sections = () => {
  let dataMap = {};
  ex_schedule().forEach((event) => {
    event.type.forEach((category) => {
      if (category === 'Games') {
        if (!dataMap[event.date]) {
          dataMap[event.date] = [];
        }
        dataMap[event.date].push(event);
      }
    });
  });

  return dataMap;
};

export default Game_Sections;
