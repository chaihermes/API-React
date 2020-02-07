import React from 'react'

export default class Clock extends React.Component {
    
    constructor(props){
        super(props)

        
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        
        let interval_id = setInterval( () => {
            //guardamos essa informação numa variável.
            //o setInterval é um temporizador.
            //Pra atualizar o relógio, precisa usar o setState.
            //this.state.timer = new Date().toLocaleTimeString()
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)

        this.setState({
            //aqui dizemos que mantemos o estado, e criamos uma propriedade pra procurar o id.
            ...this.state,
            interval_id: interval_id
        })
    }

    componentWillUnmount(){
        //aqui usamos o id pra encerrar o componente. Ele para de funcionar através do id informado.
        clearInterval(this.state.interval_id);
    }

    render() {
        return (
            <div>
                {this.state.timer}
            </div>    
        )
    }
}

//componentDidMount: está setando um um intervalo de tempo (1segundo) pra atualizar o relógio.
//clearInterval(); detroi a função interval
//se der um console.log, o retorno é o id da função setInterval.