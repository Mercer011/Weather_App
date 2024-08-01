const apiKey = "d1b50c69bdba6c48011ceca4721500cf"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcn = document.querySelector(".weather-icon");

async function checkWeather(city){
  const resp = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await resp.json();
 

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed +" Km/H";
}

searchBtn.addEventListener("click",()=> {
  checkWeather(searchBox.value);
  document.querySelector(".weather").style.display = "block";

  
if(data.weather[0].main == "Clouds"){
  weatherIcn.src = "/img/clouds.png"
}

else if(data.weather[0].main == "Clear"){
  weatherIcn.src = "/img/clear.png"
}

else if(data.weather[0].main == "Rain"){
  weatherIcn.src = "/img/rain.png"
}

else if(data.weather[0].main == "Drizzle"){
  weatherIcn.src = "/img/drizzle.png"
}

});
// checkWeather(city);