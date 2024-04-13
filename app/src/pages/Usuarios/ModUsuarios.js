import {React} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useParams, Navigate } from 'react-router-dom';
import FormModUsuarios from "./FormModUsuario";

/**
 * Pagina para modificar un registro de usuario
 */
const ModUsuarios = () =>
{
    //Obtener id del usuario a modificar
    let { id } = useParams();
    id = parseInt(id);
    let usuario = sample_usuarios[id];
    //Regresar a pagina de usuarios si la informacion no existe
    if(!usuario)
    {
        alert("Este registro no existe");
        return <Navigate to="/usuarios" />;
    }

    return (
        <div>
            <h1>Modificar Registro de Usuario</h1>
            <h2>ID: {id}</h2><FormModUsuarios id={id}/>
            </div>);
};

export default ModUsuarios;