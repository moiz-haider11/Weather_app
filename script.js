const API_KEY = "b9b72d7f54ee2f5350bba91afbd677d7"; // <-- Put your API key here

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const errorMsg = document.getElementById("errorMsg");
    const card = document.getElementById("weatherResult");

    if (city === "") {
        errorMsg.innerText = "Please enter a city name.";
        errorMsg.classList.remove("hidden");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${b9b72d7f54ee2f5350bba91afbd677d7}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Error handling
        if (data.cod !== 200) {
            errorMsg.innerText = "City not found!";
            errorMsg.classList.remove("hidden");
            card.classList.add("hidden");
            return;
        }

        errorMsg.classList.add("hidden");

        // Insert data
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp + "°C";
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = data.main.humidity;
        document.getElementById("wind").innerText = data.wind.speed;

        // Weather icon
        const iconCode = data.weather[0].icon;
        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        card.classList.remove("hidden");

    } catch (error) {
        errorMsg.innerText = "Network error. Try again!";
        errorMsg.classList.remove("hidden");
    }
}
function toggleDark() {
    document.body.classList.toggle("dark");
}
