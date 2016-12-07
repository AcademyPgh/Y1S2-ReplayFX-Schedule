import axios from 'axios';

const Schedule = () => {

  return axios('https://replayfxcalendar.azurewebsites.net/public');
};

export default Schedule;
