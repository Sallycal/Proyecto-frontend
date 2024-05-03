import { getDataWeather } from './counter'
import './index.css'

const data = await  getDataWeather() 
const temp = document.getElementsByClassName('temp');
const city = document.getElementsByClassName('name-city');
const humidity = document.getElementsByClassName('humidity');
const wind = document.getElementsByClassName('wind');

console.log(data);
// console.log(data.main.temp) 
// console.log('temp', temp);

temp[0].innerHTML = Math.round(data.main.temp) + " ºc";
city[0].innerHTML = data.name;
humidity[0].innerHTML = data.main.humidity + "%";
wind[0].innerHTML = data.wind.speed + " km/h";
