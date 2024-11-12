const button = document.getElementById("id")
const data = document.getElementById("input");

const city = document.getElementById('city_name')
const time = document.getElementById('time')
const temp = document.getElementById('temp')



async function get_data(name) {
    const n = await fetch(`https://api.weatherapi.com/v1/current.json?key=4f2d7e15a20b4135b91170657240511&q=${name}&aqi=yes`)
    return await n.json()
}

button.addEventListener('click', async() =>{
    const name = (data.value);
    const result =  await get_data(name);
    const localTime = result.location.localtime;
    console.log(result)
    city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    time.innerText = formatLocalTime(localTime)
    temp.innerText = `${result.current.temp_c}°`;
    document.getElementById("image").src= `https:${result.current.condition.icon}`;

    document.getElementById("Feels").innerText = `Feels like ${result.current.feelslike_f}`

    document.getElementById("cloudy").innerText = result.current.condition.text;
    document.getElementById("wind").innerText = `Wind: ${result.current.wind_kph} kph`
    document.getElementById("humidity").innerText = `Humidity: ${result.current.humidity}%`;
    document.getElementById("precip").innerText = `Precip: ${result.current.precip_mm}%`


})
function formatLocalTime(localTime) {
    const [date, time] = localTime.split(" "); 
    
    const [year, month, day] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${parseInt(day)} ${monthNames[parseInt(month) - 1]} ${year} ${time}`;
}


window.onload = function() {
    const searchElement = document.getElementById("Search");
    let i = -200;

    const interval = setInterval(() => {
        searchElement.style.top = i + 'px';
        i++;

        if (i > 0) {
            clearInterval(interval); 
        }
    },0); 
};


