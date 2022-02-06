
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
   setTimeout(() => {
     setAlert(null);
   }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "Success");
     
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#3c2a2a';
      showAlert("Dark Mode Enabled", "Success");
    }
  }
  return (
    <>
  
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter Text here" mode={mode} />
   </div>
  {/* <div className="container">
  <About />
  </div> */}
  
   
   
    </>
  );
}

export default App;
