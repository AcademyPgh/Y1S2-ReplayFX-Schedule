import ex_schedule from './schedule';
const Favorties_Sections = () => {
  let dataMap = {};
  ex_schedule().forEach((event) => {
    event.type.forEach((category) => {
      if (category === 'Favorties') {
        if (!dataMap[event.title]) {
          dataMap[event.title] = [];
        }
        dataMap[event.title].push(event);
      }
    });
  });

  return dataMap;
};

export default Favorties_Sections;
