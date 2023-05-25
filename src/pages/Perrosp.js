import React from 'react'
import { Encabezado } from './Encabezado'
import {Footer} from './Footer'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Perrosp.css"
import Extraviado_1 from "../images/Extraviado_1.jpg"
import Extraviado_2 from "../images/Extraviado_2.jpg"
import Extraviado_3 from "../images/Extraviado_3.jpg"
import Extraviado_4 from "../images/Extraviado_4.jpg"
export const Perrosp= () => {
  return (
    <>
    <Encabezado />
   
    <br />
    <br />
    <h1 className="display-4 fw-bold lh-1 my-9" style={{ textAlign: 'center'}}>Perros perdidos. </h1>
    <div style={{ position: 'relative',top: '-80px', left: '60px', width: '100px', height: '100px', borderRadius: '2%', overflow: 'hidden' }}>
          <img
            src="https://j.gifs.com/ygdY27.gif?fbclid=IwAR3vJzNt0RNwW3ccpreTnqECamdpbYHmrHmCTEzCTWZn0B1s1aZDT2_tqk4"  
            alt="Imagen"
            className="img-fluid"
            style={{ position: 'absolute',top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
   
    <div className="container" >
      <Carousel id="miCarrusel">
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Extraviado_1} className="img-fluid w-50" alt="Primer elemento" />
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Extraviado_2} className="img-fluid w-50" alt="Segundo elemento" />
          </div>
          <Carousel.Caption>5
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Extraviado_3} className="img-fluid w-50" alt="Tercer elemento" />
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Extraviado_4} className="img-fluid w-50" alt="Cuarto elemento" />
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <br />
    <br />
    <Footer />
  </>
  )
}
export default Perrosp