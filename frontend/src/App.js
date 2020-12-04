import React, { useState } from 'react';
import removeRepeated from './removeRepeated';

function App() {
    var [palavra, setPalavra] = useState('');
    var [limite, setLimite] = useState('');
    var str;

    async function handleSubmit(event){
        event.preventDefault();
        str = removeRepeated(String(palavra),Number(limite));
        alert('Removendo palavras repetidas\nResultado: ' + str);
    }

    return (
      <><td><form onSubmit={handleSubmit}>
        <a>Removendo palavras repetidas </a>
        <div>
          <label>
            Palavra:
            <input type="text" value={palavra} onChange={event=> setPalavra(event.target.value)}/>
          </label>
        </div>
        <div>
          <label>
              Limite:
              <input type="text" value={limite} onChange={event=> setLimite(event.target.value)}/>
          </label>
        </div>
        <div>
          <input type="submit" value="Enviar"/>
        </div>
      </form></td>
      <td><a>Teste</a>
      </td></>
    );
    //"xxyzzaayy"  
}

export default App;