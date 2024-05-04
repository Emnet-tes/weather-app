

export default function Formateddate(props){
    let days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' ,'Friday' , 'Saturday' , 'Sunday'];
    let day = days[props.utc.getDay()];
    let hour = props.utc.getHours();
    let minuets = props.utc.getMinutes();
    if (hour < 10){
        hour = "0"+hour;
    }
    if (minuets < 10)
    {
        minuets = "0"+minuets;
    }

    return `${day}  ${hour}:${minuets}`;
}