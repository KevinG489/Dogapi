import React from 'react'
import { Encabezado } from './Encabezado'
import {Footer} from './Footer'
import sanber from "../images/sanber.jpg"
import husky from "../images/husky.jpg"
import mestizo from "../images/mestizo.jpg"
export const Adopcion= () => {
  return (
 <>
<Encabezado/>
<br/>
      <br/>
      <h1 className="display-4 fw-bold lh-1 my-9" style={{ textAlign: 'center'}}>Adopta Un Perrito </h1>
      <div style={{ position: 'relative',top: '-40px', left: '1050px', width: '200px', height: '100px', borderRadius: '10%', overflow: 'hidden' }}>
          <img
            src="https://media.tenor.com/iEWFcQcAs1wAAAAM/happy-pug-excited-pug.gif"  
            alt="Imagen"
            className="img-fluid"
            style={{ position: 'absolute',top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        
     <div className="container col-md-12  my-4 mt-4 " >
     <br/>
    <div className="row justify-content-center">
   
      <div className="col-md-4 my-9 mt-2">
        <img
          src={sanber}
          alt="Imagen"
          className="di-disable w-100  "style={{ height: '300px' }}
        />
     
      </div>
      <div className="col-md-8">
        <h2> Hola me llamo: Gigante. </h2>
        <br/>
        <p style={{textAlign:"justify"}}>¿Estás buscando un nuevo miembro para tu familia? Conoce a nuestro encantador perrito San Bernardo, que está buscando un hogar lleno de amor y cuidado.</p>
          <p style={{textAlign:"justify"}}>Este adorable cachorro es un San Bernardo de raza pura, conocida por su ternura, lealtad y carácter amigable. Con su pelaje suave y ojos tiernos, seguramente robará tu corazón en un instante.Antes de encontrar su nuevo hogar, nuestro perrito San Bernardo ha recibido cuidados veterinarios completos. Está en óptimas condiciones de salud y ha sido revisado por especialistas para garantizar su bienestar.</p>
          <p style={{textAlign:"justify"}}>Si estás listo para brindarle un hogar amoroso a este hermoso perrito San Bernardo, no dudes en ponerte en contacto con nosotros. ¡Estamos seguros de que llenará tu vida de alegría y compañía incondicional!.</p>
          <p style={{textAlign:"justify"}}>Puedes comunicarte al número de teléfonico: 6645786754</p>
      </div>
    </div>

    <br/>
  </div>
  <div className="container col-md-12  my-4 " >
     <br/>
    <div className="row justify-content-center">
      <div className="col-md-4 my-4 mt-2">
        <img
          src={husky}
          alt="Imagen"
          className="di-disable w-100  "style={{ height: '300px' }}
        />
      </div>
      <div className="col-md-8">
        <h2> Hola me llamo: Tornado.</h2>
        <br/>
        <p style={{textAlign:"justify"}}>Nuestro cachorro Husky es un compañero perfecto para las familias con niños. Son conocidos por ser juguetones, amigables y llenos de vitalidad. ¡Imagínate las risas y las aventuras que podrían compartir juntos!.</p>
          <p style={{textAlign:"justify"}}> Si te encanta la vida al aire libre y los largos paseos, este cachorro es ideal para ti. Los Huskies son amantes de la naturaleza y les encanta explorar. Será tu compañero perfecto en todas tus aventuras.</p>
          <p style={{textAlign:"justify"}}>Antes de encontrar su nuevo hogar, nuestro cachorro Husky ha recibido todos los cuidados veterinarios necesarios. Está sano y ha sido revisado por profesionales para asegurar su bienestar.
          Si estás listo para abrir las puertas de tu hogar y corazón a este hermoso cachorro Husky, no dudes en ponerte en contacto con nosotros. Estamos seguros de que llenará tu vida de amor y felicidad"..</p>
          <p style={{textAlign:"justify"}}>Puedes comunicarte al número de teléfonico: 6645786754</p>
      </div>
    </div>

    <br/>
  </div>
  <div className="container col-md-12  my-4 " >
     <br/>
    <div className="row justify-content-center">
      <div className="col-md-4 my-4 mt-2">
        <img
          src={mestizo}
          alt="Imagen"
          className="di-disable w-100  "style={{ height: '300px' }}
        />
      </div>
      <div className="col-md-8">
        <h2>Yo soy Groot.</h2>
        <br/>
        <p style={{textAlign:"justify"}}>Este adorable perrito es una mezcla única y especial. Con su personalidad tierna y ojos llenos de ternura, seguramente te robará el corazón en un instante.</p>
          <p style={{textAlign:"justify"}}>Nuestro perrito es un verdadero amor. Es juguetón, cariñoso y le encanta estar rodeado de personas. Será un compañero fiel y leal para ti y tu familia.</p>
          <p style={{textAlign:"justify"}}>Antes de encontrar su nuevo hogar, nuestro perrito ha recibido atención veterinaria completa. Está sano y ha sido examinado por expertos para garantizar su bienestar.
</p>
<p style={{textAlign:"justify"}}>Puedes comunicarte al número de teléfonico: 6645786754</p>
      </div>
    </div>

    <br/>
  </div>
    
<br/>
<Footer/>
</>
  )
}

export default Adopcion