
// //import { data } from "autoprefixer"

export async function getDataWeather (nameCity = 'Sincelejo') {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=35afc3bb379789d81ab729809a61014c&lang=es`)
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message ||'Error en la solicitud del API');
    }

    if (data.cod !== 200) {
      throw new Error(data.message || "Resultados no encontrados");
    }

    return data;

  } catch (error) {
    alert(error.message); 
  }
}
