import './CampoData.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";

const CampoData = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="campo-data">
            <label>{props.label}</label>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
            />
        </div>        
    )
}

export default CampoData


