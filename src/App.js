import React from 'react';
import './App.css';
import RemovendoRepeticao from './page/RemovendoRepeticao';
import CriandoRepeticao from './page/CriandoRepeticao'
import SomaLetras from './page/SomaLetras';

function App() {
  
  return (
    <React.Fragment>
        <div className='content'>
    <div className="one"><RemovendoRepeticao/></div>
    <div  className="two">< CriandoRepeticao/></div>
    <div  className="three">< SomaLetras/></div>
    </div>
  </React.Fragment>
  );
}

export default App;