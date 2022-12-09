# Weather Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Checkout the site!](https://mattjgatsby.github.io/weather-dashboard/)

## Description

This weather dasboard application allows you to search your favourite city and find up to date weather information as well as a 5 day forcast.

## Code Snippet

Here is a function that fetchs data from the open weather api with the name of the city that the user enters.

```JavaScript
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
      displayWeather(data);
    });
}
```

## Usage

Simply enter in a city name into the provided form and click the submit button. Then you'll see the forcast displayed on the screen.

## Author Links

- [Github](https://github.com/mattjgatsby)
- [LinkedIn](https://www.linkedin.com/in/matthew-gatsby-1a1521250/)
