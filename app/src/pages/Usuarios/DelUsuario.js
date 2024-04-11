import {React} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useParams, Navigate } from 'react-router-dom';

/**
 * Pagina para modificar un registro de usuario
 */
const DelUsuarios = () =>
{
    //Obtener id del usuario a modificar
    let { id } = useParams();
    id = parseInt(id);
    let usuario = sample_usuarios[id];
    //Regresar a pagina de usuarios si la informacion no existe
    if(!usuario)
    {
        return <Navigate to="/usuarios" />;
    }
    sample_usuarios[id] = null;
    alert("Usuario eliminado con éxito");
    return <Navigate to="/usuarios" />;
};

export default DelUsuarios;