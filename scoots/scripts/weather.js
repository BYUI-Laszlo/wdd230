/*---- First lettes Capital ----*/

function capitalizeWords(text) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

/*---- Current Weather ----*/

const currentTemp = document.querySelector('.d1wtemp');
const weatherIcon = document.querySelector('.d1wicon');
const captionDesc = document.querySelector('.d1wdesc');
const humidity = document.querySelector('.d1whum');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=metric&appid=a780f5dc068dd2a16ce82f109e3b01b4";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      displayWeather(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      //console.log(error);
  }
}

apiFetch();

function displayWeather(data) {
    currentTemp.innerHTML = `🌡 ${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = capitalizeWords(data.weather[0].description);
    humidity.textContent = `💦 ${data.main.humidity}%`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `${desc} weather icon`);
    captionDesc.textContent = desc;

}

/*---- 1 Day Forecast ----*/

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&units=metric&appid=a780f5dc068dd2a16ce82f109e3b01b4";

async function forecastApiFetch() {
  try {
    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      //console.log(forecastData);
      displayForecast(forecastData);
    } else {
        throw Error(await forecastResponse.text());
    }
  } catch (forecastError) {
      //console.log(forecastError);
  }
}

forecastApiFetch();
function displayForecast(forecastData) {
 
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const day2 = {min: 100, max: -100};

    forecastData.list.forEach((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000);

        if (forecastDate.getDate() === tomorrow.getDate()) {
            day2.min = Math.min(day2.min, forecast.main.temp_min);
            day2.max = Math.max(day2.max, forecast.main.temp_max);
        }
    })
    const d2max = document.querySelector(".d2maxtemp");
    d2max.innerHTML = `🌡 Max: ${Math.round(day2.max)}&deg;C`;
    const d2min = document.querySelector(".d2mintemp");
    d2min.innerHTML = `🌡 Min: ${Math.round(day2.min)}&deg;C`;
}