import {React} from "react"
import sample_peliculas from "../../data/peliculas"   


import { useParams, Navigate } from 'react-router-dom';

/**
 * Pagina para eliminar un registro de Pelicula
 */
const DelPeliculas = () =>
{
    //Obtener id del Pelicula a eliminar
    let { id } = useParams();
    id = parseInt(id);
    let pelicula = sample_peliculas[id];

    //Regresar a pagina de Peliculas si la informacion no existe
    if(!pelicula)
    {
        alert("Este registro no existe");
        return <Navigate to="/peliculas" />;
    }

    sample_peliculas[id] = null;
    alert("Pelicula eliminado con éxito");
    return <Navigate to="/peliculas" />;
};

export default DelPeliculas;