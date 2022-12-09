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

