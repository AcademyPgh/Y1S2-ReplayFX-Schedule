import _ from 'lodash'

const content_sections = (data, favorites, schedule) => {
  let dataMap = {};
  schedule.forEach((event) => {
    if (favorites.indexOf(event.Id) > -1) {
      event.isFavorite = true;
      event.ReplayEventTypes.push({Id: 0, Name: 'favorite', DisplayName: 'My Schedule'});
    }
    else {
      event.isFavorite = false;
      event.ReplayEventTypes = _.remove(event.ReplayEventTypes, ((type) => {
        return type.Id !== 0;
      }));

    }

    if (data === 'all') {
      if (!dataMap[event.Date]) {
        dataMap[event.Date] = [];
      }

      dataMap[event.Date].push(event);
    }
    else {
      let hasAdded = false;
      event.ReplayEventTypes.forEach((category) => {
        if (category.Name === data && !hasAdded) {
          if (!dataMap[event.Title]) {
            dataMap[event.Title] = [];
          }
          dataMap[event.Title].push(event);
          hasAdded = true;
        }
      });
    }
  });
  //console.log(dataMap);
  return dataMap;
};

export default content_sections;
