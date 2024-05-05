
import { useState,useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(data)
{
    let [loaded,setloaded] = useState(false);
    let [forecast,setforecast] = useState(null);
    function handleResponse(response)
    {
        setforecast(response.data.daily);
        setloaded(true);
    }

    useEffect(()=>{
        setloaded(false);
    },[data.coord]);

    if (loaded)
    { 
        return (
        <>
       
        <div className="row">
            {forecast.map(function(daily,index)
            {
                
                if (index < 5)

                {return(<div className="col" key={index}> <ForecastDay data = {daily}/> </div>);
                    
                }
                return null
            })
        }
        </div>
        </>
    );
    }
    else{
        let key = "c8a77112b2faf6684bb4b21a0aa778ae";
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${key}&units=metric`;

        axios(apiUrl).then(handleResponse);

    }
    
    
}