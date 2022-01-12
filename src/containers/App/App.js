import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Scrollbar from '../../components/scrollbar'
import '../../css/style.css';
import '../../css/responsive.css';

import HomePage8 from "../HomePage8";



function App() {
  return (
    <BrowserRouter>
        <div className="App" id='scrool'>
            <Routes>
               <Route path="/" exact element={<HomePage8 />}/>
            </Routes>
            <Scrollbar/>
        </div>
    </BrowserRouter>
  );
}

export default App;
