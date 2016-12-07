import axios from 'axios';

const Schedule = () => {
  console.log("attempting axios");
  return axios('https://replayfxcalendar.azurewebsites.net/public');
};

export default Schedule;
