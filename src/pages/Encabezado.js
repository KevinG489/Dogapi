import React from 'react'
import logo from "../images/logo.jpg"

export const Encabezado = () => {
  return (
    <>
    
    <header style={{color:'white', width: '100%', zIndex: 999}}>
           <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-success  fixed-top">
      <div className="container-fluid">
      <a href=" ">
                <img className='mx-2' src={logo} height="70"  style={{ borderRadius: "50%", backgroundColor: "transparent" }} alt="No encontrada"/>
            </a>
            <h2 style={{color: "white"}} >  &nbsp;Conociendo A Mi Perro </h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <div className='navbar-nav ms-auto mx-1'>
                    <h5><a  className='nav-item nav-link' style={{color: "white"}}  href=" /">Inicio</a></h5>
                    <h5><a  className='nav-item nav-link' style={{color: "white"}}  href=" /sobre-nosotros">Nosotros</a></h5>
                    <h5><a  className='nav-item nav-link' style={{color: "white"}}  href=" /perritos-perdidos">Perritos Perdidos</a></h5>
                    <h5><a  className='nav-item nav-link' style={{color: "white"}}  href=" /perritos-encontrados">Perritos Encontrados</a></h5>
                    <h5><a  className='nav-item nav-link ' style={{color: "white"}}  href=" /adopcion-de-perritos">Adopci&oacute;n De Perritos</a></h5>
                  
                </div>
       
        </div>
      </div>
    </nav>
    <br/>
    <br/>   <br/>
    </header>

    
    </>
  )
}
