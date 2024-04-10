import React from "react"
import sample_usuarios from "../../data/usuarios"
import Data from "../../components/data/Data";
import Link from "../../components/navegacion/Link";


import { useParams, Navigate } from 'react-router-dom';
import Usuarios from "./Usuarios";

const ReadUsuarios = () =>
    {
        //Obtener id del usuario a ver
        let { id } = useParams();
        id = parseInt(id);
        let usuario = sample_usuarios[id];

        //Regresar a pagina de usuarios si la informacion no existe
        if(!usuario)
        {
            return <Navigate to="/usuarios" />;
        }
        //Datos para renderizado. Etiqueta y valor a desplegar
        let data = {
            "ID de Usuario": id,
            "Nombre": usuario.nombre,
            "Apellido Paterno":usuario.apPat,
            "Apellido Materno":usuario.apMat,
            "Correo": usuario.email,
        };
        //Añadir valor de super usuario solo si es
        if(usuario.superUser)
        {
            data["Superusuario"] = true
        };
        return(
            <Data id={id} entryType={"usuarios"} data={data}/>
        );
    };

    export default ReadUsuarios;