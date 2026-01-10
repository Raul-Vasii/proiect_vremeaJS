let selectedCity;
const apiKey = "501156ad52c38de9f2a44d09f21ed5a5";
let weatherData;

function getDayOfTheWeek(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.

  const date = new Date(utc * 1000);

  // Extragem ziua saptamanii, sub forma de index.

  const dayIndex = date.getDay();

  let day;

  switch (dayIndex) {
    case 0:
      day = "Duminică";

      break;

    case 1:
      day = "Luni";

      break;

    case 2:
      day = "Marți";

      break;

    case 3:
      day = "Miercuri";

      break;

    case 4:
      day = "Joi";

      break;

    case 5:
      day = "Vineri";

      break;

    case 6:
      day = "Sâmbătă";

      break;

    default:
      // Aruncam o eroare daca index-ul nu este valid (nu ar trebui sa se ajunga vreodata aici).

      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }

  // Retunam ziua echivalenta indexului.

  return day;
}

function getHour(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.
  const date = new Date(utc * 1000);
  // Extragem ora. Daca ora are o valoare mai mica de 10, ii adaugam un 0.
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  // Extragem minutele. Daca minutele au o valoare mai mica de 10, le adaugam un 0.
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // Returnam ora, sub formatul dorit.
  return `${hours}:${minutes}`;
}

function afiseazaVremeaCurenta(apiData) {
  const vremeaCurenta = document.querySelector(".current-weather");
  console.log(apiData, "VremeaCurenta");

  vremeaCurenta.innerHTML = `<div class="temperature-container">
              <strong class="city fs-2"> ${apiData.name}</strong>
              <p class="day-time-container fs-4"><strong> ${getDayOfTheWeek(apiData.dt)}</strong> ,${getHour(apiData.dt)}</p>
              <strong class="temperature fs-1">${apiData.main.temp}°C</strong>
              <img class="weather-icon" src="http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png">
            </div>
            <div class="temperature-details-container">
              <p class="real-feel-label fs-5"> Real Feel: <strong class="real-feel">-12°C</strong></p>
              <p class="description fs-5">${apiData.weather[0].description}</p>
              <p class="wind-label fs-5">Vant:<strong class="wind">${apiData.wind.speed}km/h</strong></p>
            </div>`;
}

function afiseazaPrognoza() {
  const prognoza = document.querySelector(".weather-forecast");
  console.log(prognoza, "Prognoza pe 5 zile");
  prognoza.innerHTML = `<div class="container">
          <div class="weather-forecast d-flex flex-wrap"><h3 class="text-primary">Sâmbătă</h3>
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>11:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>0°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-2°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>14:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>0°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-4°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>17:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-2°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-7°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>20:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-7°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-13°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>23:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-8°C</strong></div>
              <div>cer fragmentat</div>
              <div class="real-feel">Real feel: <strong>-15°C</strong></div>
            </div>
          <h3 class="text-primary">Duminică</h3>
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>02:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-6°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-12°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>05:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-9°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-16°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>08:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-11°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-18°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>11:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-8°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-13°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>14:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-6°C</strong></div>
              <div>cer fragmentat</div>
              <div class="real-feel">Real feel: <strong>-11°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>17:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-8°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-11°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>20:00</div>
              <div><img src="http://openweathermap.org/img/wn/13n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-11°C</strong></div>
              <div>ninsoare ușoară</div>
              <div class="real-feel">Real feel: <strong>-15°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>23:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-13°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-18°C</strong></div>
            </div>
          <h3 class="text-primary">Luni</h3>
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>02:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-16°C</strong></div>
              <div>cer fragmentat</div>
              <div class="real-feel">Real feel: <strong>-16°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>05:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-17°C</strong></div>
              <div>cer fragmentat</div>
              <div class="real-feel">Real feel: <strong>-21°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>08:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-16°C</strong></div>
              <div>cer fragmentat</div>
              <div class="real-feel">Real feel: <strong>-21°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>11:00</div>
              <div><img src="http://openweathermap.org/img/wn/03d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-10°C</strong></div>
              <div>nori împrăștiați</div>
              <div class="real-feel">Real feel: <strong>-15°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>14:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-6°C</strong></div>
              <div>cer fragmentat</div>
              <div class="real-feel">Real feel: <strong>-11°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>17:00</div>
              <div><img src="http://openweathermap.org/img/wn/03d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-9°C</strong></div>
              <div>nori împrăștiați</div>
              <div class="real-feel">Real feel: <strong>-14°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>20:00</div>
              <div><img src="http://openweathermap.org/img/wn/03n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-11°C</strong></div>
              <div>nori împrăștiați</div>
              <div class="real-feel">Real feel: <strong>-17°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>23:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-12°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-17°C</strong></div>
            </div>
          <h3 class="text-primary">Marți</h3>
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>02:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-13°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-18°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>05:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-10°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-16°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>08:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-9°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-14°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>11:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-4°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-8°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>14:00</div>
              <div><img src="http://openweathermap.org/img/wn/13d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-2°C</strong></div>
              <div>ninsoare ușoară</div>
              <div class="real-feel">Real feel: <strong>-6°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>17:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>-1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-4°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>20:00</div>
              <div><img src="http://openweathermap.org/img/wn/13n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-1°C</strong></div>
              <div>ninsoare ușoară</div>
              <div class="real-feel">Real feel: <strong>-4°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>23:00</div>
              <div><img src="http://openweathermap.org/img/wn/13n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-1°C</strong></div>
              <div>ninsoare ușoară</div>
              <div class="real-feel">Real feel: <strong>-4°C</strong></div>
            </div>
          <h3 class="text-primary">Miercuri</h3>
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>02:00</div>
              <div><img src="http://openweathermap.org/img/wn/13n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-1°C</strong></div>
              <div>ninsoare ușoară</div>
              <div class="real-feel">Real feel: <strong>-4°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>05:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>-1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-4°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>08:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>0°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-3°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>11:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-2°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>14:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-2°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>17:00</div>
              <div><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-2°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>20:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-2°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>23:00</div>
              <div><img src="http://openweathermap.org/img/wn/10n@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>ploaie ușoară</div>
              <div class="real-feel">Real feel: <strong>0°C</strong></div>
            </div>
          <h3 class="text-primary">Joi</h3>
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>02:00</div>
              <div><img src="http://openweathermap.org/img/wn/10n@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>ploaie ușoară</div>
              <div class="real-feel">Real feel: <strong>-3°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>05:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-2°C</strong></div>
            </div>
          
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>08:00</div>
              <div><img src="http://openweathermap.org/img/wn/04n@2x.png" alt=""></div>
              <div class="fs-3"><strong>1°C</strong></div>
              <div>cer acoperit de nori</div>
              <div class="real-feel">Real feel: <strong>-2°C</strong></div>
            </div>
          </div>
        </div>`;
}

async function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ro`;

  try {
    const response = await fetch(apiUrl);
    weatherData = await response.json();
    afiseazaVremeaCurenta(weatherData);
    // console.log(weatherData, "date");
  } catch {
    console.log("hey am prins eroarea");
  }
}

function updateCity(city) {
  const currentCity = document.querySelector(".current-city");
  console.log(currentCity, "oras");
  currentCity.textContent = city;
  saveToLocalStorage(city);
  fetchWeatherForecast(city);
  fetchWeatherData(city);
}

function saveToLocalStorage(city) {
  localStorage.setItem("selectedCity", city);
}

function loadFromLocalStorage() {
  const city = localStorage.getItem("selectedCity");
  if (city) {
    updateCity(city);
  } else {
    updateCity("București");
  }
}

window.onload = function () {
  loadFromLocalStorage();
};

async function fetchWeatherForecast(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}&units=metric&lang=ro`

  try {
    const response = await fetch(apiUrl);
    const forecastData = await response.json();
    afiseazaPrognoza(forecastData);
    console.log(forecastData)
    // console.log(weatherData, "date");
  } catch {
    console.log("hey am prins eroarea");
  }
}
