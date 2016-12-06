import axios from 'axios';

const Schedule = () => {
  console.log("attempting axios");
  return axios('http://replayfxcalendar.azurewebsites.net/public');
};

export default Schedule;
