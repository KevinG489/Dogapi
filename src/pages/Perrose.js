import React from 'react'
import { Encabezado } from './Encabezado'
import {Footer} from './Footer'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Perrosp.css"
import Encontrado_1 from "../images/Encontrado_1.jpg"
import Encontrado_2 from "../images/Encontrado_2.jpg"
import Encontrado_3 from "../images/Encontrado_3.jpg"
import Encontrado_4 from "../images/Encontrado_4.jpg"
export const Perrose= () => {
  return (
    <>
   <Encabezado/>
   <br/>
         <br/>
     <h1 className="display-4 fw-bold lh-1 my-9 "style={{ textAlign: 'center' }} >Perros Encontrados. </h1>
     <div style={{ position: 'relative',top: '-20px', left: '600px', width: '300px', height: '200px', borderRadius: '10%', overflow: 'hidden' }}>
          <img
            src="https://www.hotelesparaperrosmexico.com/img/fotos/animados_0012.gif?fbclid=IwAR1Hp3tjVPmZzM1Es2lpOJlTs6WSTZgWXK3buANF1VXCcK_8gaoK9i0LH4s"

      
            alt="Imagen"
            className="img-fluid"
            style={{ position: 'absolute',top: '0', left: '0', width: '70%', height: '70%', objectFit: 'cover' }}
          />
        </div>
      <div className="container"  style={{ marginTop: 9}}>
      
         <Carousel id="miCarrusel">
           <Carousel.Item>
           
           <div style={{ display: 'flex', justifyContent: 'center' }}>
             <img src={Encontrado_1} className="img-fluid w-50"  alt="Primer elemento" />
             </div>
             <Carousel.Caption>
               
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
           <img src={Encontrado_2} className="img-fluid w-50"  alt="Segundo elemento" />
           </div>
             <Carousel.Caption>
             
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
           <img src={Encontrado_3} className="img-fluid w-50"  alt="Tercer elemento"/>
           </div>
             <Carousel.Caption>
          
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
           <img  src={Encontrado_4} className="img-fluid w-50"  alt="Cuarto elemento"/>
           </div>
             <Carousel.Caption>
            
             </Carousel.Caption>
           </Carousel.Item>
   
         </Carousel>
         </div>
         
   <br/>
   <br/>
         <Footer/>
         </>
     )
   }

export default Perrose