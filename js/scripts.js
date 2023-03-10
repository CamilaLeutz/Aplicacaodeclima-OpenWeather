const apiKey = "01078643f6c0de146bda7acdebfc6cf9";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


const showWeatherData = (city) => { 
    console.log(city)


}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city)

});