import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Exampleform from '../Exampleform/Exampleform';
import './CalendarComp.css';
import moment from 'moment'

function CalendarComp() {
    const [value, onChange] = useState(new Date());

    const [formState, setFormState] = useState();

    const openForm = () => {
      setFormState("open");

    
      const body = document.body;
      body.style.overflow = 'hidden';
     
    }


    const cancelFormFunc = () => {
      setFormState(null);

      const body = document.body;
      body.style.overflow = 'scroll';
    }

    const mark = [
      '01-02-2022',
      '02-02-2022',
      '03-02-2022',
      '04-02-2022',
      '07-02-2022',
      '08-02-2022',
      '09-02-2022',
      '10-02-2022',
      '11-02-2022',
      '14-02-2022',
      '15-02-2022',
      '16-02-2022',
      '17-02-2022',
      '18-02-2022',
      '21-02-2022',
      '22-02-2022',
      '23-02-2022',
      '24-02-2022',
      '25-02-2022',
      '28-02-2022',
  ]


  
    return (
      <div>
        <Calendar onChange={onChange} onClickDay={openForm} value={value} minDate={new Date()} 

                    tileClassName={({ date, view }) => {
                      if (mark.find( x => x === moment(date).format("DD-MM-YYYY"))){
                      return  'highlight'
                      }
                    }}
                
                
                    // tileDisabled={({ date }) => date.getDay() === new Date()}
        />

        {formState && <Exampleform dayValue={value.toLocaleDateString()} cancelForm={cancelFormFunc}/>}

      </div>
    );
  }

export default CalendarComp;