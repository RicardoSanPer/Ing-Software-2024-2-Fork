import {React} from "react"
import sample_peliculas from "../../data/peliculas";  


import { useParams, Navigate } from 'react-router-dom';
import FormModPeliculas from "./FormModPeliculas";

/**
 * Pagina para modificar un registro de pelicula
 */
const ModPeliculas = () =>
{
    //Obtener id de la pelicula a modificar
    let { id } = useParams();
    id = parseInt(id);
    let pelicula = sample_peliculas[id];
    //Regresar a pagina de peliculas si la informacion no existe
    if(!pelicula)
    {
        alert("Este registro no existe");
        return <Navigate to="/peliculas" />;
    }

    return (
    <div>
        <h1>Modificar Registro de Película</h1>
        <h2>ID: {id}</h2>
    <FormModPeliculas id={id}/>
    </div>
    );
};

export default ModPeliculas;