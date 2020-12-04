import React, { useState } from 'react';
import replaceChar from '../funcoes/criandoRepeticao';

function CriandoRepeticao() {
    var [palavra, setPalavra] = useState('');
    var [times, setTimes] = useState('');
    var str;
  
    async function handleSubmit(event){
      event.preventDefault();
      str = replaceChar(String(palavra),Number(times));
      alert('Colocando letras repetidas\nResultado: \n' + str);
    }
  
    return (
      
        <form onSubmit={handleSubmit}>
          <a>Colocando letras repetidas </a>
          <div>
            <label>
              Palavra:
              <input type="text" value={palavra} onChange={event=> setPalavra(event.target.value)}/>
            </label>
          </div>
          <div>
            <label>
              Limite:
              <input type="text" value={times} onChange={event=> setTimes(event.target.value)}/>
            </label>
          </div>
          <div>
            <input type="submit" value="Enviar"/>
          </div>
        </form>
      
    );
}

export default CriandoRepeticao;