import React from "react"
import sample_usuarios from "../../data/usuarios"
import Data from "../../components/data/Data";
import Link from "../../components/navegacion/Link";


import { useParams, Navigate } from 'react-router-dom';
import Usuarios from "./Usuarios";

const ReadUsuarios = () =>
    {
        let { idUsuario } = useParams();
        idUsuario = parseInt(idUsuario);
        let usuario = sample_usuarios[idUsuario];

        //Regresar a pagina de usuarios si la informacion no existe
        if(!usuario)
        {
            return <Navigate to="/usuarios" />;;
        }
        //Datos para renderizado. Etiqueta y valor a desplegar
        let data = {
            "ID de Usuario": idUsuario,
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
            <div className="data-container">
                <div>
                <Data data={data}/> 
                </div>
                <div class="data-buttons">
                    <Link url="" texto="Modificar" variante="modificar"/>
                    <Link url="" texto="Eliminar" variante="eliminar"/>
                </div>  
            </div>
        );
    };

    export default ReadUsuarios;