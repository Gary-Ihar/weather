document.addEventListener("DOMContentLoaded", function() {
  let weather = new XMLHttpRequest();
  let objWeather;

  const API_KEY = "b5a730f4d4a4f9f3959dc0d1de50afa6";
  weather.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=" + API_KEY
  );

  weather.responseType = "json";

  weather.send();

  weather.onload = function() {
    if (weather.status != 200) {
      alert(`Ошибка`);
    } else {
      objWeather = weather.response;
      createWeatherData(objWeather);
    }
  };

  weather.onerror = function() {
    alert(`Ошибка соединения`);
  };

  function createWeatherData(data) {
    console.log(data);
  }
});
