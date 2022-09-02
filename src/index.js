import React from 'react'
import ReactDOM from 'react-dom'
import Pedido from './Pedido'
import Cartao from './Cartao'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Feedback from './Feedback'

const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Ainda não chegou"
  const funcaoOK = () => ('Agradecemos a confirmação!')
  const funcaoNOK = () => ('Verificaremos o ocorrido!')
  const componenteFeedback  = (<Feedback 
    textoOK   = {textoOK}
    textoNOK  = {textoNOK}
    funcaoOK  = {funcaoOK}
    funcaoNOK = {funcaoNOK} />)

  return <div className='container border rounded mt-2 ps-2 bg-secondary p-2'>
    <div className='row border-bottom m-2'>
      <h1 className='display-5 text-center'><i className="fa-solid fa-close text-white"></i></h1>
      <h1 className='text-center text-white'>itadakimasu</h1>
    </div>
    <div>

    </div>
    <div className='row'>
      <div className="col-sm-12 col-md-6 m2">
        <Cartao cabecalho = "22/04/2021">
        <Pedido 
        data="21/04/2021"
        icone="fa-solid fa-hdd fa-2x"
        titulo="SSD"
        descricao="SSD Kingston A400 - SATA"
        />
        {componenteFeedback}
        </Cartao>
      </div>
    </div>

    <div className='row'>
      <div className="col-sm-12 col-md-6 m2">
      <Cartao cabecalho = "22/04/2021">
        <Pedido 
        data="22/04/2021"
        icone="fa-solid fa-laptop fa-2x"
        titulo="Laptop"
        descricao="Notebook Dell - 8Gb - 15"
        />
        {componenteFeedback}
      </Cartao>
      </div>
    </div>

    <div className='row'>
      <div className="col-sm-12 col-md-6 m2">
      <Cartao cabecalho = "23/04/2021">
        <Pedido 
        data="22/04/2021"
        icone="fa-solid fa-book fa-2x"
        titulo="Book"
        descricao="Concrete Mathematics - Donald Knuth"
        />
        {componenteFeedback}
        </Cartao>
      </div>
    </div>

  </div>

}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
) 