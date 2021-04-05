import React, { useContext } from 'react';
import Dog from './Dog';
import { ImgContext } from '../Context/ImgContex';
import { v4 as uuidv4 } from 'uuid';


const ListaPerros = ({ arrayDog, setDog }) => {

    //Extraer las recetas
    const { razaImg } = useContext(ImgContext);

    




    return (
        <div className="row mt-5">
            {razaImg === null
                ?
                null
                :

                razaImg.map(dog => (
                    <Dog
                        key={uuidv4()}
                        id={uuidv4()}
                        dog={dog}
                        arrayDog={arrayDog}
                        setDog={setDog}
                    />
                ))

            }

        </div>

    );
}

export default ListaPerros;