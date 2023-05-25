import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Encabezado } from "./Encabezado";
import {Footer} from './Footer'


export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        setDogs(data);
        setBreeds(data.map((dog) => dog.name)); // Obtener una lista de nombres de razas
      } catch (error) {
        console.error(error);
      }
    };

    setSearched(false);
    fetchDogData();
  }, []);

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();
      setDogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchForDog();
    setSearched(true);
  };

  return (
    <>
      <Encabezado />
      <br/>
      <br/>
      {!dogs ? (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading...
        </h1>
      ) : (
        <>
            <div style={{ position: 'relative',top: '20px', left: '1090px', width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden' }}>
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f43e.gif" 
            alt="Imagen"
            className="img-fluid"
            style={{ position: 'absolute',top: '0', left: '0', width: '90%', height: '90%', objectFit: 'cover' }}
          />
        </div>
          <section className="p-8 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="flex items-center justify-center text-center px-5 text-3xl font-bold lg:text-5xl text-black">
             Busca La Raza De Tu Perro 
              </h1>
             

              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Buscar un perro / raza"
                  className="py-2 px-4 rounded shadow w-full bg-slate-400 text-black placeholder-white"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <select
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="py-2 px-4 rounded shadow w-full bg-slate-400 text-black"
                >
                  <option value="">Todas las razas</option>
                  {breeds.map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
                &nbsp;
                <button type="submit"> &nbsp;Buscar</button>
              </form>
            </div>

            <div className="container">
              <div className="row" style={{ marginTop: "30px" }}>
                {!searched ? (
                  dogs.map((dog) => (
                    <div className="col-sm-4 my-4" key={dog.id}>
                      <Link to={`/${dog.name}`} className="hover:no-underline">
                        <div className="card w-70">
                          <img
                            src={dog.image.url}
                            alt={dog.name}
                            className="d-disabled w-100"
                            height="300"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>
                              Bred For: {dog.bred_for}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  dogs.map((dog) => (
                    <div className="col-sm-4 my-4" key={dog.id}>
                      <Link to={`/${dog.name}`} className="hover:no-underline">
                        <div className="card w-70">
                          <img
                            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                            alt={dog.name}
                            className="d-disabled w-100"
                            height="300"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>
                              Bred For: {dog.bred_for}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
          <Footer/>
        </>
      )}
    </>
  );
}