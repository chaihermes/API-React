import React from 'react';
import Table from './components/Table';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profissionais: []
    }
  }

  componentDidMount(){
    let config = {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    }
    fetch('http://localhost:8000/api/profissionais', config)
    .then(function(response){
      console.log(response);
      return response.json();
      //esse primeiro then tem uma função de callback. Extrai o json do objeto.
    }).then((json) => {
      //usamos arrow function pra tornar o escopo global.
      console.log(json);
      //Alterando o estado vazio, com as informações passadas por json
      this.setState({ ...this.state, profissionais: json })

    }).catch(function(error){
      console.log(error);
    }); 
  }



  render(){
  return (
   <>
   <Table dados={this.state.profissionais}/>
    
  </>
  );
}
}

export default App;
//existe o fragment: é uma tag vazia <> </> que serve pra segurar toda a informação. Ao invés de usar uma div pra segurar tudo, é possível usar o fragment, que tem a mesma função.
//criamos um estado vazio.
//fetch é uma solicitação AJAX. Precisa configurar o headers pra avisar que está recebendo um JSON. Nesse caso não precisa do body, pois está recebendo a informação via método GET. Se for método POST precisa fazer o body.
//O fetch é uma promise. O then aguarda a promise do fecth ser respondida.
//A key serve pra quando tiver alguma alteração nos itens, ao invés de re-renderizar toda a tabela, só altera o que precisa ser alterado.