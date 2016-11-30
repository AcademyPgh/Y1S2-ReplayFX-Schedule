import ex_schedule from './schedule';

const Schedule_Sections = () => {
  let dataMap = {};
  ex_schedule().forEach((event) => {
    if (!dataMap[event.date]) {
      dataMap[event.date] = [];
    }

    dataMap[event.date].push(event);
  });
  return dataMap;
};

export default Schedule_Sections;
