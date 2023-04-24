import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

function AgeDisplay(prop) {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setAge(getYearsOld(prop.birthday, new Date())), 10);
        return () => clearInterval(id);  
      }, [prop.birthday]);

    return (
        <div className="content">
            <div className="name">{prop.name}</div>
            <div className="age">         
                <div>{age}</div>
                <div>years old</div>
            </div>    
            <ProgressBar age={Math.floor(age)} percentage={age - Math.floor(age)} />
        </div>
    ); 
}

function getYearsOld(birthday, now) {
    return ((now.getFullYear() - birthday.getFullYear() - 1) + getPercentageToBirthdayThisYear(birthday, now)).toFixed(9);
}

//if birthday passed this year, percentage will be > 1
function getPercentageToBirthdayThisYear(birthday, now) {
    let birthdayLastYear = new Date(birthday.valueOf()).setFullYear(now.getFullYear() - 1);
    let birthdayThisYear = new Date(birthday.valueOf()).setFullYear(now.getFullYear());
    
    return (now - birthdayLastYear) / (birthdayThisYear - birthdayLastYear); //accounts for leap years
}

export default AgeDisplay;