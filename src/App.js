import logo from './logo.svg';
import './App.css';
import './estilos.css'
import { Fragment, useState, useEffect } from 'react'
import Container from './Componentes/Container';
import PacientesContext from './Componentes/PacientesContext';
import TitleP from './Componentes/TitleP'

function App() {


  return (

    <Fragment>
      <TitleP />
      <PacientesContext>
        <Container />
      </PacientesContext>
    </Fragment>


  );
}

export default App;
