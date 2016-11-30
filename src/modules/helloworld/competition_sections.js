import ex_schedule from './schedule';
const Competition_Sections = () => {
  let dataMap = {};
  ex_schedule().forEach((event) => {
    event.type.forEach((category) => {
      if (category === 'Competition') {
        if (!dataMap[event.date]) {
          dataMap[event.date] = [];
        }
        dataMap[event.date].push(event);
      }
    });
  });
  return dataMap;
};

export default Competition_Sections;
