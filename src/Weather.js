import React, { useState } from "react"
import axios from "axios"
// import {Blocks} from "react-loader-spinner"
import './Weather.css';

export default function Weather(props) {
    let [city, SetCity] = useState('')
    let [weatherData, SetweatherData] = useState(null)
    let [Time, SetTime] = useState(null)
    // let [forecast,Setforecast] = useState(null)



    const key = "82105329264a81552281d1bba61e049b";

    function fetchData() {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
                SetweatherData(response.data);
                SetTime(CurrentTime(response.data.timezone, response.data.dt));

            })

    }


    function CurrentTime(timezoneIn, dtIn) {

        const unixTime = dtIn + timezoneIn;
        const dateObj = new Date(unixTime * 1000);
        const dayOfWeek = dateObj.toLocaleString('en', { weekday: 'long' });
        const time = dateObj.toLocaleString('en', { hour: 'numeric', minute: 'numeric', hour12: true });

        return dayOfWeek + ' ' + time;
    }

    function handleInputChange(event) {
        SetCity(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        fetchData();
    };


    return (
        <>

            <div className="main p-3">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-auto">
                        <input type="search" onChange={handleInputChange} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary " >search</button>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-success ">current</button>
                    </div>
                </form>
                {weatherData ? (

                    <div className="container mt-2 ">
                        <div className="row align-items-start ">
                            <h5>{city}</h5>
                            <h6> {Time}</h6>
                            <h6>{weatherData.weather[0].description}</h6>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-6">

                                <img src="http://openweathermap.org/img/wn/04n@2x.png" alt={weatherData.weather[0].description}></img>
                                <div className="tempData"><span className="tempratue">{weatherData.main.temp}</span><span className="celcious">
                                    °C
                                </span></div>

                            </div>

                            <div className="col-6 ">

                                <h6>preciptation : {weatherData.main.humidity}%
                                </h6>
                                < h6 >wind : {weatherData.wind.speed}Km/h</h6>
                            </div>
                        </div>


                    </div>




                ) : null
                }

            </div><div className="container text-center " id="links">
                <a href="https://github.com/Emnet-tes/weather-app" rel="noreferrer" target="_blank">open sourced  </a>by Emnet
            </div>
        </>)
}