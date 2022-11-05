const api = {
    key: "c50c5ae4cd86afa16e16f1f438ed203e",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }




















// const api = {
//     key: 'c50c5ae4cd86afa16e16f1f438ed203e',
//     baseUrl: 'https://api.openweathermap.org/data/2.5/',

// }


// const searchbox = document.querySelector('.search-box');
// searchbox.addEventListener('keypress' , setQuery);


// function setQuery(evt) {
// if (evt.keyCode === 13){
//     getResults(searchbox.value);
//     console.log(searchbox.value)
//     }
// }

// function getResults(query) {

//     fetch(`${api.baseUrl}weather?q=${query}&units=metrics&APPID=${api.key}`)
//     .then(weather => {
//         return weather.json(); 
//     }).then(displayResults);
// }


// function displayResults(weather) {
//     console.log(weather);
//     let city = document.querySelector('.location .city');
//     city.innertext = `${weather.name}, ${weather.sys.country}`;

//     let now = new Date();
//     let date = document.querySelector('.location .date');
//     date.innertext = dateBuilder(now);

//     let temp = document.querySelector('.current .temp');

//     temp.innerHTML = `${Math.round(weather.main.temp)}<span> C</span>`

//     let weather_el = document.querySelector('.current .weather');
//     weather_el.innertext = weather.weathe[0].main;
 
//     let hilow = document.querySelector('.hi-low')
//     hilow.innertext = `${weather.main.temp.min}c / ${weather.main.temp.max}`
// }


// function dateBuilder(d) {
//     let months = ["January", "February", "March", "April", "May", "June", "July", 
//     "August", "September", "October", "November", "December"];
// let days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];

// let day = days[d.getDay()];
// let date = d.getDate();
// let month = months[d.getMonth()];
// let year = d.getFullYear();

// return `${day} ${date} ${month} ${year}`;

// }

