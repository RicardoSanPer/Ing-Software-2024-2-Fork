import React from "react";
import DataSimple from "../../components/data/DataSimple";
import sample_usuarios from "../../data/usuarios";

import Link from "../../components/navegacion/Link";

/**
 * Pagina principal de usuarios.
 * Muestra una lista con información simplificada de usuarios junto con sus
 * respectivos botones para ver, modificar o eliminar un registro
 */
const Usuarios = () => {
    let data = []
    for(let i = 0; i < sample_usuarios.length; i++)
    {
        if(sample_usuarios[i] == null)
        {
            continue;
        }
        data.push(
        //agregar todos los datos a la lista
        <DataSimple id={i} entryType={"usuarios"} dict={
            {"Nombre":sample_usuarios[i].nombre,
            "Apellido Paterno":sample_usuarios[i].apPat,
            "Correo":sample_usuarios[i].email}
        }/>);
    }
    return (
        <div>
            <h1>Pagina de Usuarios</h1>
            <Link url="/usuarios/crear" texto="Crear Nuevo"/>
            {data}
        </div>
    );
};
 
export default Usuarios;