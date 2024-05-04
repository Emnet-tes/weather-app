import React, { useState } from "react"
import axios from "axios"

import './Weather.css';
import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
    let [weatherData, SetweatherData] = useState({ ready: false });
    let [city, Setcity] = useState(props.defaultcity);

    function handleResponse(response) {
        SetweatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    function search() {
        const key = "82105329264a81552281d1bba61e049b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
                handleResponse(response)
            })
    }

    function handleInputChange(event) {
        Setcity(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
    };

    if (weatherData.ready) {
        return (
            <div className="body">
                <div className="main p-3">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input  className ="p-1 "type="search" placeholder="Enetr city .." onChange={handleInputChange} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary " >search</button>
                        </div>
                       
                    </form>
                    <Weatherinfo data={weatherData} />
                </div><div className="container text-center " id="links">
                    This project was coded by Emnet and is open-sourced on <a href="https://github.com/Emnet-tes/weather-app" rel="noreferrer" target="_blank">GitHub</a> and hosted on <a href="https://weather-app-grvj.onrender.com"  rel="noreferrer" target="_blank">Render</a> .
                </div>
            </div>)
    }
    else {
        search();
        return 'Loading ....';



    }
}