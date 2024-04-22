// import React from "react"
import axios from "axios"
import {Rings} from "react-loader-spinner"
export default function Weather(props){
    function responsehandleing(response){
        alert(`the weather in ${response.data.name} is ${response.data.main.temp}`);
    }
    const key = "82105329264a81552281d1bba61e049b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${key}`
    axios.get(apiUrl).then(responsehandleing)
    return (
    <>
        <h1>
            Weather info
        </h1>
        <Rings
        type="puff"
        color="orange"
        height={100}
        width={100}
        timeout={3000}
        />
    </>)
}