import axios from 'axios';

const Schedule = () => {
  return axios('http://replayfxcalendar.azurewebsites.net/replayevents/json');
};

export default Schedule;
