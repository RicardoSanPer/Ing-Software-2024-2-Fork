import React from "react"
import Data from "../../components/data/Data";


import { useParams, Navigate } from 'react-router-dom';
import Peliculas from "./Peliculas";
import sample_peliculas from "../../data/peliculas";


/**
 * Pagina que despliega información más detallada de una pelicula
 */
const ReadPeliculas = () =>
    {
        //Obtener id de la pelicula a ver
        let { id } = useParams();
        id = parseInt(id);
        let pelicula = sample_peliculas[id];

        //Regresar a pagina de peliculas si la informacion no existe
        if(!pelicula)
        {
            alert("Este registro no existe");
            return <Navigate to="/peliculas" />;
        }
        //Datos para renderizado. Etiqueta y valor a desplegar
        let data = {
            "ID de Pelicula": id,
            "Nombre": pelicula.nombre,
            "Genero": pelicula.genero,
            "Duración": pelicula.duracion,
            "Inventario": pelicula.inventario,
        };
        
        return(
            <Data id={id} entryType={"peliculas"} data={data}/>
        );
    };

    export default ReadPeliculas;