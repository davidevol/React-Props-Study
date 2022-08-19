import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {    
  return <div className='container border rounded mt-2 ps-2'>
    <div className='row border-bottom m-2'>
      <h1 className='display-5 text-center'>Start</h1>
      <button className='block'>Off</button>
    </div>
    <div>

    </div>
  </div>

}

ReactDOM.render(    
  <App />,    
document.querySelector('#root')
)