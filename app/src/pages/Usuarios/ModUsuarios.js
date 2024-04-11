import {React, useState} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useParams, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import FormUsuarios from "./FormModUsuario";
import FormModUsuarios from "./FormModUsuario";

//Pagina para el formulario de modificacion de un usuario
const ModUsuarios = () =>
{
    //Obtener id del usuario a modificar
    let { id } = useParams();
    id = parseInt(id);
    let usuario = sample_usuarios[id];
    //Regresar a pagina de usuarios si la informacion no existe
    if(!usuario)
    {
        return <Navigate to="/usuarios" />;;
    }

    return <FormModUsuarios id={id}/>;
};

export default ModUsuarios;