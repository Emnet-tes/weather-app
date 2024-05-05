import React from "react";
import "./Weather.css";


export default function WeatherTemperature(props) {

    return (
        <div className="tempData">
            <span className="tempratue">{Math.round(props.celsius)}</span>
            <span className="celcious">°C </span>
        </div>
    );
}