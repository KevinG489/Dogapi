import React, { useState, useEffect } from "react"
import { Encabezado } from './Encabezado'
import {Footer} from './Footer'
import { Link, useParams } from "react-router-dom"

export default function SingleDog() {
  const [dog, setDog] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        )
        const data = await res.json()
        setDog(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleDogData()
  }, [name])

  return (
    <>
    <Encabezado/>

      
      <section className="max-w-2xl mx-auto flex items-center justify-center h-screen">
      <br/>
             
        {dog.map((item) => (
          <div
            key={item.id}
            className="container shadow-lg p-4 rounded-lg grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center"
          >
            <article className="flex">
            <br/>
              <br/>
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt={item.name}
                className="w-50 mx-auto"
              />
            </article>
            <article className="flex-grow pl-8">
          
              <h1 className="text-3xl font-bold text-black mb-8 lg:text-5xl">
                {item.name}
              </h1>
              {item.description && (
                <p className="text-slate-400 mb-8 text-sm lg:text-base text-black leading-loose lg:leading-relaxed">
                  {item.description}
                </p>
              )}
  
              <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
           
                <li>
                  <span className="font-bold text-slate-200">Bred For:</span>{' '}
                  {item.bred_for}
                </li>
                <li>
                  <span className="font-bold text-slate-200">Height:</span>{' '}
                  {item.height.metric} cm
                </li>
                <li>
                  <span className="font-bold text-slate-200">Weight:</span>{' '}
                  {item.weight.metric} kgs
                </li>
                <li>
                  <span className="font-bold text-slate-200">Breed Group:</span>{' '}
                  {item.breed_group}
                </li>
                <li>
                  <span className="font-bold text-slate-200">Lifespan:</span>{' '}
                  {item.life_span}
                </li>
                <li>
                  <span className="font-bold text-slate-200">Temperament:</span>{' '}
                  {item.temperament}
                </li>
              </ul>
  
              <Link to="/" className="btn btn-primary">
                &larr; Regresar
              
              </Link>
              <br/>
              <br/>
            </article>
          </div>
        ))}
      </section>
      <br/><br/>
      <Footer/>
    </>
  );
              }