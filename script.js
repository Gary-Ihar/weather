document.addEventListener("DOMContentLoaded", function() {
  let weather = new XMLHttpRequest();
  let objWeather;

  const API_KEY = "b5a730f4d4a4f9f3959dc0d1de50afa6";
  weather.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=" +
      API_KEY
  );

  weather.responseType = "json";

  weather.send();

  weather.onload = function() {
    if (weather.status != 200) {
      alert(`Ошибка`);
    } else {
      objWeather = weather.response;

      createDate(objWeather);
    }
  };

  weather.onerror = function() {
    alert(`Ошибка соединения`);
  };

  function createDate(data) {
    for (let i = 0; i < 40; i += 8) {
      let dt = data.list[i].dt_txt;
      let temperature = Math.round(data.list[i].main.temp);
      let icon = data.list[i].weather[0].icon;
      needDay(i, dt, temperature, icon);
      console.log(icon)
    }
    console.log(data);
  }

  function needDay(day, dt, temperature, icon) {
    switch (day) {
      case 0:
        createDay("one_data", dt, "one_temp", temperature, icon, 'img1');
        break;
      case 8:
        createDay("two_data", dt, "two_temp", temperature, icon, 'img2');
        break;
      case 16:
        createDay("three_data", dt, "three_temp", temperature, icon, 'img3');
        break;
      case 24:
        createDay("four_data", dt, "four_temp", temperature, icon, 'img4');
        break;
      case 32:
        createDay("five_data", dt, "five_temp", temperature, icon, 'img5');
        break;
    }
  }

  function createDay(day, text, temp, temperature, icon, id) {
      
    let pData = document.querySelector(`.${day}`);
    let pTemp = document.querySelector(`.${temp}`);
    let img = document.querySelector(`#${id}`)
    pData.textContent = text;
    pTemp.innerHTML = temperature + "℃";
    img.setAttribute('src',`http://openweathermap.org/img/wn/${icon}@2x.png`)
  }
});
