import React ,{useState}from "react";
import "./Weather.css";


export default function WeatherTemperature(props)
{
    let [unit,Setunit] = useState(props.metric);
    
    function Changemetrics(event)
    {
        event.preventDefault();
        if (unit === 'celcius'){
            Setunit("fharniet");
        }
        else{
            Setunit('celcius');
        }
    }
    
    function tofharniet(){
        
        return Math.round((props.celsius * 9 / 5) + 32);
    }
    
        
        if (unit === "celcius"){
            return(
                <div className="tempData">
            <span className="tempratue">{Math.round(props.celsius)}</span>
            <span className="celcious">°C {" | "} 
            <a href="/" onClick={Changemetrics}>°F</a>
                    
            </span></div>
            )
            
        }
        else{
            return(
                <div className="tempData">
                    <span className="tempratue">{tofharniet()}</span>
                    <span className="celcious">
                    <a href="/" onClick={Changemetrics}>°C</a> 
                    {" | "}°F
                        
                    </span></div>
            );
                
        }
        
}