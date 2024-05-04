import React from "react";
import Formateddate from "./Formateddate";
import WeatherTemperature from "./WeatherTemprature";
export default function Weatherinfo(props) {
    return (

        <div className="container mt-2 ">

            <div className="row align-items-start ">
                <h5>{props.data.city}</h5>
                <h6> <Formateddate utc={props.data.date}  /></h6>
                <h6>{props.data.description}</h6>
            </div>

            <div className="row align-items-start">

                <div className="col-6">

                    <img src="http://openweathermap.org/img/wn/04n@2x.png" alt={props.data.description}></img>
                    <WeatherTemperature celsius={props.data.temperature} metric="celcius"  />

                </div>

                <div className="col-6 ">

                    <h6>preciptation : {props.data.humidity}%</h6>
                    < h6 >wind : {props.data.wind}Km/h</h6>

                </div>

            </div>

        </div>
    )
}