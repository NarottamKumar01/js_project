const apiKey = "6b59de5a1ff068214b52e86efcae55b3";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city) return;

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const data = await response.json();

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";

    const weather = data.weather[0].main;
    if (weather === "Clouds") weatherIcon.src = "clouds.png";
    else if (weather === "Clear") weatherIcon.src = "clear.png";
    else if (weather === "Rain") weatherIcon.src = "rain.png";
    else if (weather === "Drizzle") weatherIcon.src = "drizzle.png";
    else if (weather === "Mist") weatherIcon.src = "mist.png";
    else if (weather === "Snow") weatherIcon.src = "snow.png";
    else weatherIcon.src = "wind.png";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});
