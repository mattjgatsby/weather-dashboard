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
