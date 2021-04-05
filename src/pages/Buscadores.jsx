import React, { Fragment, useState } from "react";
import Buscadors from '../components/Buscadors';
import RazasProvider from '../Context/RazasContext';
import RazasContext from '../Context/RazasContext';
import ImgProvider from '../Context/ImgContex';
import ImgContext from '../Context/ImgContex';
import Headers from '../components/Headers';
import Canasta from '../components/Canasta';
import '../Buscador.css';
import { Link } from "react-router-dom";

function Buscador({ agragarPerro }) {



  // Funcion que elimina un perro por su id
  const eliminarPerro = id => {
    const nuevosPerros = dog.filter(Perro => Perro.id !== id);
    setDog(nuevosPerros);
  }


  //   // Funcion que agrega un perro por su id
  //   const agragarPerro = id => {
  //     const adoptarPerro = dog.filter(Perro => Perro.id !== id);
  //     setDog(adoptarPerro);
  //     console.log('adoptando..')
  // }

  // Arreglo de Adopcion 
  const [dog, setDog] = useState([]);


  //Arreglo  
  const crearCarro = Perro => {
    setDog([
      ...dog,
      Perro
    ])
  }




  return (
    <RazasProvider>
      <ImgProvider>
        <Fragment>
          <Headers />


          <div className="container">
            <div className="row">
              <div className="one-half column">
                <Buscadors
                  crearCarro={crearCarro}
                  setDog={setDog}
                  arrayDog={dog}
                />

              </div>
              <div className="one-half colum">
                <div className="perros">
                  <h1>Perros Elegidos</h1>
                  {dog.map(Perro => (
                    <Canasta
                      key={Perro.id}
                      Perro={Perro}
                      eliminarPerro={eliminarPerro}

                    />

                  ))}

                </div>
                <button
                  className="Continuar"
                ><Link to="/Final" className="Con">Continuar</Link>
                </button>
              </div>
            </div>
          </div>
          <ImgContext />
          <RazasContext />
        </Fragment>
      </ImgProvider>
    </RazasProvider>


  );
}

export default Buscador;