
class Estacionamento {
    constructor(nome ) {
        this.nome = nome
        this.controle = []

    }
    receberCliente(controle) {
        this.controle.push(controle)
    }

    finalizarCliente() {
        this.controle.map(function (controle ) {
            return controle === inputSaida.value
        } )
    }
    
}

class Bilhete {
    constructor(placa, entrada, saida) {
        this.placa = placa
        this.entrada = entrada
        this.saida = saida
        
    }
}

class Guarita {
    constructor(nome, estacionamento) {
        this.nome = nome
        this.estacionamento = estacionamento
    }

    entradaVeiculo() {

    }

    saidaVeiculo() {

    }

    calculaTotal() {

    }

}

const inputEntrada = document.querySelector('#entrada')
const inputSaida = document.querySelector('#saida')
const inputHoraEntrada = document.querySelector('#horaEntrada')

const nvEstacionamento = new Estacionamento('Anger')

inputEntrada.addEventListener('submit',entradaHandler)
inputHoraEntrada.addEventListener('submit', entradaHandler)
inputSaida.addEventListener('submit', saidaHandler)

function entradaHandler() {
  const entradaTicket = new Bilhete(inputEntrada.value, inputHoraEntrada.value)
  console.log(entradaTicket)
    document.querySelector('#mostraPlaca').innerHTML = entradaTicket.placa
    document.querySelector('#mostraHora').innerHTML = entradaTicket.entrada
}

function saidaHandler() {
   const saidaTicket = nvEstacionamento.finalizarCliente(inputSaida.value)
   console.log(saidaTicket)

}




// document.querySelector('#showEntrada').innerHTML = nvEntrada