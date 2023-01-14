let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Tuesday",
  "Friday",
  "Saturday"
];
let dayToday = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let curentDay = document.querySelector("#curent-day");
curentDay.innerHTML = `${dayToday} ${hour} &#42889 ${minute}`;

function cityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `Now in ${searchInput.value}`;

  let units = "metric";
  let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(urlApi).then(showCurrentWeatData);

  function showCurrentWeatData(response) {
    let currentTempInCity = Math.round(response.data.main.temp);
    let showCurrentTempInCity = document.querySelector("h2");
    showCurrentTempInCity.innerHTML = `${currentTempInCity}°C`;

    let currentHumInCity = response.data.main.humidity;
    let showCurrentHumInCity = document.querySelector(".humidity");
    showCurrentHumInCity.innerHTML = `humidity ${currentHumInCity}%`;

    let currentFeelLikeInCity = Math.round(response.data.main.feels_like);
    let showCurrentFeelLikeInCity = document.querySelector(".wind");
    showCurrentFeelLikeInCity.innerHTML = `feels like ${currentFeelLikeInCity}°C`;
  }
}

let form = document.querySelector("#search");
form.addEventListener("submit", cityName);
