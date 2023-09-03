
import { useContext, useEffect, useState, useTransition } from 'react';
import './App.css';

import Navbar from './Component/Navbar';
import TextUtils from './Component/TextUtils';

function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <TextUtils Heading="Enter Text Here" />
    </div>
  );
}

export default App;
