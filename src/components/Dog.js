import React from 'react';
import { v4 as uuidv4 } from 'uuid';




const Dog = ({ dog, crearCarro, setDog, id, arrayDog }) => {



    // Funcion que agrega un perro por su id
    const agregarPerro = id => {
        setDog([
            ...arrayDog,
            { id: id, img: dog }
        ])
    }

  


    // cuando el usuario adopta el perro 
    const onSubmitAdoptar = e => {
        e.preventDefault();


        // Asignar un ID
        dog.id = uuidv4();

        // Crear la adopcion
        crearCarro(dog);

    }

    return (




        <div className="card" style={{ width: '14rem' }}>
            <span>
                <img className="card-img-top"
                    name="img"
                    value="img"
                    src={dog}
                /></span>

            <div className="card-body">
                <h5 className="card-title">Este es tu perro</h5>
                {/* <p className="card-text">El busca un hogar</p> */}

                <button type="button" className="btn btn-primary"
                    onClick={() => agregarPerro(id)}
                > Adoptar</button>

            </div>
        </div>

    );
}

export default Dog;