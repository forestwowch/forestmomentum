const API_KEY="aa7f08afc62eb2c793d8ce4c12aeaf52";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log("you live in there", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

navigator.geolocation.getCurrentPosition(onGeoOk);
