import ex_schedule from './schedule';
const content_sections = (data) => {
  let dataMap = {};
  ex_schedule().forEach((event) => {
    if (data === 'all') {
      if (!dataMap[event.date]) {
        dataMap[event.date] = [];
      }

      dataMap[event.date].push(event);
    }
    else {
      event.type.forEach((category) => {
        if (category === data) {
          if (!dataMap[event.title]) {
            dataMap[event.title] = [];
          }
          dataMap[event.title].push(event);
        }
      });
    }
  });

  return dataMap;
};

export default content_sections;
