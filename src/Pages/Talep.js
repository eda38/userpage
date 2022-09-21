import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

function Talep() {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} selectRange={true} />
            </div>
            {date.length > 0 ? (
                <p className='text-center'>
                    <span className='bold'></span>
                    <span className='bold'></span>
                </p>
            ) : (
                <p className='text-center'>
                    <span className='bold'></span>
                </p>
            )}
        </div>
    );
}
export default Talep;