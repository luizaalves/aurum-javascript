import React from 'react';
import removeRepeated from './exer1';

class Pagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {palavra: '', limite: '', str: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      palavra: event.target.palavra,
      limite: event.target.limite, 
      str: event.target.str
    });
  }

  handleSubmit(event){
    event.preventDefault();

    this.state.str = removeRepeated(this.state.palavra.str,this.state.limite.value);
    console.log(this.state.str);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Palavra:
            <input type="text" value={this.state.palavra} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Limite:
            <input type="text" value={this.state.limite} onChange={this.handleChange}  />
          </label>
        </div>
        <div>
          <input type="submit" value="Enviar" />
          <a>{this.state.str}</a>
        </div>
      </form>
    )
  }
    //"xxyzzaayy"  
}

export default Pagina;