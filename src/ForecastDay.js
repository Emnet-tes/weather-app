import React from "react";
import "./WeatherForecast.css"
export default function ForecastDay(props)
{
    function Rounder(temp)
    {
        return `${Math.round(temp)}°`;
    }
    function day()
    {
        let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        let utc = new Date(props.data.dt*1000);
        return `${days[utc.getDay()]}`;
    }
    return(
        <>
            <div className="daily ms-2">
                {day()}
            </div>
            <div className="Icons img-fluid">
                <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt="forecast icon"></img>


            </div>
            <span className="max-temprature ">{Rounder(props.data.temp.max)}</span>
            <span className="min-temprature ms-2">{Rounder(props.data.temp.min)}</span>
        </>
    );
}