import axios from 'axios';

const Schedule = () => {
  return axios('http://replayfxcalendar.azurewebsites.net/public');
};

export default Schedule;
