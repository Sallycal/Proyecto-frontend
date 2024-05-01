
//import { data } from "autoprefixer"

export async function getDataWeather (nameCity = "sincelejo") {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=35afc3bb379789d81ab729809a61014c&lang=es`)
    .then(Response => Response.json())
   .then(resp => resp)
   .catc(error => error.message)

  return data;
}