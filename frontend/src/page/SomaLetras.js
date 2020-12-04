import React, { useState } from 'react';
import letterSum from '../funcoes/somaLetras';

function SomaLetras() {
    var [primeira, setPrimeira] = useState('');
    var [segunda, setSegunda] = useState('');
    var num;
  
    async function handleSubmit(event){
      event.preventDefault();
      num = letterSum(String(primeira),String(segunda));
      alert('Resultado: \n' + num);
    }
  
    return (
      
        <form onSubmit={handleSubmit}>
          <a>Somando maior e menor das strings </a>
          <div>
            <label>
              Primeira palavra:
              <input type="text" value={primeira} onChange={event=> setPrimeira(event.target.value)}/>
            </label>
          </div>
          <div>
            <label>
              Segunda palavra:
              <input type="text" value={segunda} onChange={event=> setSegunda(event.target.value)}/>
            </label>
          </div>
          <div>
            <input type="submit" value="Enviar"/>
          </div>
        </form>
      
    );
}

export default SomaLetras;