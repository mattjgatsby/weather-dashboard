// - Your API key is 4d616bd74c5f7b669bf48689910a54b6

let newCity = [];

function fetchApi(cityName) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial&appid=4d616bd74c5f7b669bf48689910a54b6";
  fetch(apiLink)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        alert("Not a valid city name");
        return;
      }
    })
    .then(function (data) {
      hideDisplay();
      showWeather(data);
    });
}

function btnClickFunk(event) {
  fetchApi(event.target.textContent);
}

function renderBtn() {
  let cityName = document.getElementById("city_input");
  let newBtn = document.createElement("button");
  newBtn.setAttribute("class", "mx-auto mb-1 btn-block");
  newBtn.textContent = cityName.value;
  newBtn.onclick = btnClickFunk;
  appendtoList(newBtn.textContent);
  document.getElementById("saved_city").appendChild(newBtn);

  fetchApi(newBtn.textContent);
}

function displayWeather(data) {
  let nowWeather = document.getElementById("now_weather");
  let cityName = document.createElement("h2");
  let image = document.createElement("img");
  let temp = document.createElement("p");
  let windInfo = document.createElement("p");
  let humid = document.createElement("p");

  cityName.textContent =
    data.city.name +
    " (" +
    moment.unix(data.list[0].dt).format("MM/D/YYYY") +
    ")";
  cityName.setAttribute("class", "d-inline");
  image.setAttribute(
    "src",
    "https://openweathermap.org/img/w/" + data.list[0].weather[0].image + ".png"
  );
  image.setAttribute("class", "d-inline");
  temp.textContent = "Temperature: " + data.list[0].main.temp + "°F";
  windInfo.textContent = "Wind speed: " + data.list[0].windInfo.speed + " mph";
  humid.textContent = "Humidity: " + data.list[0].main.humid + "%";

  nowWeather.appendChild(cityName);
  nowWeather.appendChild(image);
  nowWeather.appendChild(temp);
  nowWeather.appendChild(windInfo);
  nowWeather.appendChild(humid);

  let forecastTitle = document.getElementById("upcoming_weather");
  let fiveDayTitle = document.createElement("h3");
  fiveDayTitle.textContent = "5-Day Forecast:";
  forecastTitle.appendChild(fiveDayTitle);

  let fiveDayWeather = document.getElementById("five_day_weather");
  fiveDayWeather.setAttribute("class", "row");

  for (let i = 7; i < data.list.length; i += 8) {
    let divEl = document.createElement("div");
    let date = document.createElement("h4");
    let icon = document.createElement("img");
    let temp = document.createElement("p");
    let wind = document.createElement("p");
    let humidity = document.createElement("p");

    divEl.setAttribute(
      "class",
      "d-inline row-col-2 bg-info bg-gradient mx-2 px-1"
    );
    date.textContent = moment.unix(data.list[i].dt).format("MM/D/YYYY");
    icon.setAttribute(
      "src",
      "https://openweathermap.org/img/w/" +
        data.list[i].weather[0].icon +
        ".png"
    );
    temp.textContent = "Temperature: " + data.list[i].main.temp + "°F";
    wind.textContent = "Wind speed: " + data.list[i].wind.speed + " mph";
    humidity.textContent = "Humidity: " + data.list[i].main.humidity + "%";

    divEl.appendChild(date);
    divEl.appendChild(icon);
    divEl.appendChild(temp);
    divEl.appendChild(wind);
    divEl.appendChild(humidity);
    fiveDayWeather.appendChild(divEl);
  }
}
