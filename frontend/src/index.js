import React from 'react';
import ReactDOM from 'react-dom';
import RemovendoRepeticao from './page/RemovendoRepeticao';
import CriandoRepeticao from './page/CriandoRepeticao'
import SomaLetras from './page/SomaLetras';

ReactDOM.render(
  <React.Fragment>
    <RemovendoRepeticao/>
    < CriandoRepeticao/>
    < SomaLetras/>
  </React.Fragment>,
  document.getElementById('root')
);