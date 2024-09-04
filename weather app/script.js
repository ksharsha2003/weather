document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        const apiKey = '581f33f59ecdef4844deab2438fa88bc';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = `
                    <p><strong>${data.name}</strong></p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
            })
            .catch(() => {
                document.getElementById('weatherResult').innerHTML = 'City not found!';
            });
    } else {
        document.getElementById('weatherResult').innerHTML = 'Please enter a city name!';
    }
});