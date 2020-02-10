import React from 'react';


export default class Table extends React.Component {

    render(){
        return(
            <>
        <h2>Profissionais</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>GitHub</th>
            <th>Tecnologia</th>
          </tr>
        </thead>
        <tbody>
            {this.props.dados.map(profissional =>   //do estado setado que recebe as informações do json, fazemos um foreach (map) pra aparecer na tela os campos da tabela. Pra chamar cada elemento na tabela, subtituimos o this.state..... pelo nome que usamos no map.
                
                <tr key = {profissional.id}>
                  <td>{profissional.nome}</td>
                  <td>{profissional.github}</td>
                  <td>{profissional.tecnologia}</td>
                </tr>  

              ) 
           }

        </tbody>
      </table>
      </>
) }

}