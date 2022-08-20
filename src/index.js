import React from 'react'
import ReactDOM from 'react-dom'
import Pedido from './Pedido'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
  return <div className='container border rounded mt-2 ps-2 bg-secondary p-2'>
    <div className='row border-bottom m-2'>
      <h1 className='display-5 text-center'><i className="fa-solid fa-close text-white"></i></h1>
      <h1 className='text-center text-white'>itadakimasu</h1>
    </div>
    <div>

    </div>
    <div className='row'>
      <div className="col-sm-8 col-md-6 m2">
        <Pedido 
        data="22/04/2021"
        icone="fa-solid fa-hdd fa-2x"
        titulo="SSD"
        descricao="SSD Kingston A400 - SATA"
        />
      </div>
    </div>

    <div className='row'>
      <div className="col-sm-8 col-md-6 m2">
        <Pedido 
        data="22/04/2021"
        icone="fa-solid fa-laptop fa-2x"
        titulo="Laptop"
        descricao="Notebook Dell - 8Gb - 15"
        />
      </div>
    </div>

    <div className='row'>
      <div className="col-sm-8 col-md-6 m2">
        <Pedido 
        data="22/04/2021"
        icone="fa-solid fa-book fa-2x"
        titulo="Book"
        descricao="Concrete Mathematics - Donald Knuth"
        />
      </div>
    </div>

  </div>

}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
) 