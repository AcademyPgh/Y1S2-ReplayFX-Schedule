import axios from 'axios';

const Schedule = () => {

  return axios('https://replayfxcalendar.azurewebsites.net/public');
};

export const Types = () => {
  return axios('https://replayfxcalendar.azurewebsites.net/public/categories');
};

export default Schedule;
