import React from 'react'
import { Encabezado } from './Encabezado'
import { Footer } from './Footer'
import logo from "../images/logo.jpg"


export const Nosotros = () => {
  return (
    <>
      <Encabezado />

      <br />

      <div className="container col-md-12  my-4 " >
        <br />
        <div className="row justify-content-center">
          <div className="col-md-4 my-4 mt-4">
            <img
              src={logo}
              alt="Imagen"
              className=" w-100" height="480"
            />
          </div>
          <div className="col-md-8">
            <h1 className="display-6 fw-bold lh-1 my-9 " style={{ textAlign: 'center' }}>¡Bienvenidos a nuestra página web sobre perros!</h1>
            <div style={{ position: 'relative',top: '-20px', left: '600px', width: '120px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
          <img
            src="https://i.gifer.com/origin/52/52e4bb28d095ff93d3a4019d43d628bc.gif"
          //  https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f43e.gif
          //  
            alt="Imagen"
            className="img-fluid"
            style={{ position: 'absolute',top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
           
            <p className="lead my-4 " style={{ textAlign: 'justify' }}>En nuestro sitio web, nos apasiona proporcionar información detallada y valiosa sobre nuestros amigos caninos. Queremos ser tu recurso confiable cuando se trata de aprender sobre las diversas razas de perros, comprender sus características únicas y brindarte recursos para ayudarte a cuidar y comprender mejor a tu compañero peludo.
            </p>

            <p className="lead  " style={{ textAlign: 'justify' }}><strong>Características y Razas de Perros:</strong>&nbsp;En nuestra sección de características y razas, encontrarás una amplia gama de información sobre diferentes razas de perros de todo el mundo. Desde las razas más populares hasta las menos conocidas, ofrecemos descripciones detalladas de cada una, incluyendo su origen, temperamento, necesidades de cuidado, nivel de actividad y cualquier otra información relevante que te ayude a elegir la raza adecuada para ti y tu estilo de vida.
            </p>

            <p className="lead  " style={{ textAlign: 'justify' }}><strong>Perros Perdidos:</strong>&nbsp;Entendemos lo angustiante que puede ser cuando un miembro peludo de tu familia se extravía. En nuestra sección de perros perdidos, proporcionamos una plataforma donde los dueños pueden publicar información sobre sus perros desaparecidos, incluyendo fotos, descripciones y detalles de contacto. También ofrecemos consejos y recursos útiles para ayudarte a maximizar tus posibilidades de reunirte con tu amado perro perdido.
            </p>

            <p className="lead  " style={{ textAlign: 'justify' }}><strong>Perros Encontrados:</strong>&nbsp;Si has encontrado un perro sin hogar o perdido, en nuestra sección de perros encontrados puedes compartir detalles sobre el perro para ayudar a localizar a su dueño legítimo. Creemos en la importancia de la colaboración comunitaria para asegurar que los perros perdidos encuentren su camino de regreso a casa, y brindamos un espacio dedicado para facilitar esta conexión entre los dueños y los perros encontrados.
            </p>

            <p className="lead  " style={{ textAlign: 'justify' }}><strong>Adopción de Perros:</strong>&nbsp;La adopción es una forma maravillosa de darle a un perro una segunda oportunidad y un hogar amoroso. En nuestra sección de adopción de perros, trabajamos con refugios y organizaciones dedicadas al rescate de perros para promover la adopción responsable. Te proporcionamos información sobre perros disponibles para adopción, sus historias, personalidad y cómo comenzar el proceso de adopción. Creemos en encontrar el ajuste perfecto entre los perros y sus nuevos dueños.

            </p>

            <p className="lead  " style={{ textAlign: 'justify' }}>Nuestro equipo de amantes de los perros está comprometido en brindarte contenido preciso, útil y emocionante. Ya seas un dueño de perro experimentado, un amante de los perros o alguien que busca información sobre estas maravillosas criaturas, esperamos que encuentres todo lo que necesitas en nuestra página web.
            </p>

            <h5 className="display-7 fw-bold lh-4" style={{ textAlign: 'center' }}>¡Gracias por visitarnos y esperamos que disfrutes explorando y aprendiendo sobre el fascinante mundo de los perros!
            </h5>
          </div>
        </div>

        <br />
      </div>



      <Footer />
    </>
  )
}

export default Nosotros