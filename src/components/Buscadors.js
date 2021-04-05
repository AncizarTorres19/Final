import React, { useContext } from 'react';
import { RazasContext } from '../Context/RazasContext';
import { ImgContext } from '../Context/ImgContex';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaPerros from './ListaPerros';


const Buscadors = ({ setDog, arrayDog }) => {

    const { razas } = useContext(RazasContext);
    const { handleChange } = useContext(ImgContext);


    return (
        <form
     
        >
            <div className="cuerpo">
                <h2 className="Hola"> Hola Bienvenido,tenemos a tu amigo fiel </h2>
                <div className="cold-md-4">

                    <select onChange={handleChange}
                        className="form-control"

                    >
                        <option className="form-select" aria-label="Default select example" name="Selec" value="Selec">--Selecciona Raza--</option>
                        ${Object.keys(razas).map(raza => (
                            <option
                                className="form-select"
                                key={raza}
                                value={raza}
                            >{raza}</option>
                        ))}
                    </select>
                    <ListaPerros
                        arrayDog={arrayDog}
                        setDog={setDog}
                    ></ListaPerros>

                </div>

            </div>

        </form>

    );
}
export default Buscadors;




