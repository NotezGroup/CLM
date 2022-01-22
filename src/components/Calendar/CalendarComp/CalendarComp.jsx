import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Exampleform from '../Exampleform/Exampleform';
import './CalendarComp.css';


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


  
    return (
      <div>
        <Calendar onChange={onChange} onClickDay={openForm} value={value}/>

        {formState && <Exampleform dayValue={value.toLocaleDateString()} cancelForm={cancelFormFunc}/>}

      </div>
    );
  }

export default CalendarComp;