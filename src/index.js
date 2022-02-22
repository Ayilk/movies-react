import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';



function Componente({ titulo, children }){
  return(
    <div className='contenedor'>
      <h1> { titulo} </h1>
      <div> { children } </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
document.getElementById('root')
);

