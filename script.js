const apiKey = "9b8868bbe0e4333eea07a96a046e27d7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('button');
const weatherIcon = document.querySelector('.weather_icon');

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else if(searchBox.value == ""){
        alert("Please input the city");
    }
    else{

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =  data.main.temp;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "sun.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }


    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
}
    
}
searchButton.addEventListener('click',() =>{
    checkWeather( searchBox.value );
})