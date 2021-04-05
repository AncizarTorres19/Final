import React, { createContext, useState } from 'react';
import axios from "axios";



//crear el context

export const ImgContext = createContext();

// provider es donde se encuentran las funciones y state
const ImgProvider = (props) => {



    // crear es state del conext
    const [razaImg, setRazaImg] = useState(null);

    const handleChange = e => {
        if (e.target.value !== 'Selec') {
            const razaSearch = e.target.value
            obtenerRaza(razaSearch)
        }
    }

    const obtenerRaza = async (raza) => {

        if (raza !== "Selec") {
            const url = `https://dog.ceo/api/breed/${raza}/images/random/20`;

            const razaImg = await axios.get(url);
            setRazaImg(razaImg.data.message);

        }

    }

    return (
        <ImgContext.Provider
            value={{
                razaImg,
                setRazaImg,
                obtenerRaza,
                handleChange,


            }}

        >
            {props.children}
        </ImgContext.Provider>
    )
}

export default ImgProvider
