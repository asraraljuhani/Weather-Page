var api_key = "";
let city = "Makkah";
let date = "2020-01-11";
let time = "15:52"
let description = "Cloudy";
let degree = 32;
let icon = "c02d";
let res;
showCard();


function Search() {

  city = document.getElementById('search-city').value;
  fetch("https://api.weatherbit.io/v2.0/current?city=" + city + "&days=1&key=" + api_key)
    .then(response => {
      response.json().then(data => {
        res = data;
        editCard();
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function editCard() {

  city = res.data[0].city_name;
  let spilt = res.data[0].ob_time.split(/(\s+)/); // "2020-01-17 16:52"
  date = spilt[0];
  time = spilt[2];
  icon = res.data[0].weather.icon;
  description = res.data[0].weather.description;
  degree = res.data[0].temp;
  document.getElementsByClassName('weather-location')[0].innerText = city;
  document.getElementById('time').innerText = "Last Update in " + time;
  document.getElementById('degree').innerText = degree + " ";
  document.getElementById('des-weather').innerText = description;
  document.getElementsByClassName('card-title')[0].childNodes[1].childNodes[0].src = "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
}

function showCard() {

  document.getElementsByClassName('weather-location')[0].innerText = city;
  document.getElementById('time').innerText = "Last Update in " + time;
  document.getElementById('degree').innerText = degree + " ";
  document.getElementById('des-weather').innerText = description;
  document.getElementsByClassName('card-title')[0].childNodes[1].childNodes[0].src = "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
}
