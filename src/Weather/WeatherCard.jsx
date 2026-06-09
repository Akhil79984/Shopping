

const WeatherCard =({weather})=>{
    console.log(weather);
    return(
    <div className=" weather-Card">
       <center> 
        <h2>{weather.name}</h2>
        <h2>{weather.tempe}°C</h2>
        <p>Condition:{weather.condition}</p>
        <p>Humidity:{weather.humidity}%</p>
        <p>Wind Speed:{weather.wind}Km/hr</p>
        <p>Cool:{weather.cool} -°C</p>
        </center>

    </div>)
}
export default WeatherCard;