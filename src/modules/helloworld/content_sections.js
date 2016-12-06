import _ from 'lodash';
const content_sections = (data, favorites, schedule) => {
  let dataMap = {};
  schedule.forEach((event) => {
    if (_.indexOf(favorites, event.id) > -1)
    {event.isFavorite = true;
      event.type.push('Favorites');}
    else
    {event.isFavorite = false;}

    if (data === 'all') {
      if (!dataMap[event.date]) {
        dataMap[event.date] = [];
      }

      dataMap[event.date].push(event);
    }
    else {
      event.type.forEach((category) => {
        if (category === data) {
          if (!dataMap[event.date]) {
            dataMap[event.date] = [];
          }
          dataMap[event.date].push(event);
        }
      });
    }
  });

  return dataMap;
};

export default content_sections;
