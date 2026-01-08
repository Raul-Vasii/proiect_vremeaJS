let selectedCity;
const apiKey = "79b3df4bf52df24b72b5bf9996b741b9";
let weatherData;

function afiseazaVremeaCurenta() {
  const VremeaCurenta = document.querySelector(".current-weather");
  console.log(VremeaCurenta, "VremeaCurenta");

  VremeaCurenta.innerHTML = `<div class="temperature-container">
              <strong class="city fs-2">Timișoara</strong>
              <p class="day-time-container fs-4"><strong>Joi</strong> ,20:12</p>
              <strong class="temperature fs-1">-6°C</strong>
              <img class="weather-icon" src="https://openweathermap.org/img/wn/04n@2x.png">
            </div>
            <div class="temperature-details-container">
              <p class="real-feel-label fs-5"> Real Feel: <strong class="real-feel">-12°C</strong></p>
              <p class="description fs-5">cer acoperit de nori</p>
              <p class="wind-label fs-5">Vant:<strong class="wind">15km/h</strong></p>
            </div>`;
}

async function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ro`;

  try {
    const response = await fetch(apiUrl);
    weatherData = await response.json();
    afiseazaVremeaCurenta();
    // console.log(weatherData, "date");
  } catch {
    console.log("hey am prins eroarea");
  }
}

function updateCity(city) {
  selectedCity = document.querySelector(".current-city");
  selectedCity.textContent = city;
  saveToLocalStorage(city);
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
