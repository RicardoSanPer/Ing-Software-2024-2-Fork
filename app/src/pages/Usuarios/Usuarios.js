import React from "react";
import DataSimple from "../../components/data/DataSimple";
import sample_usuarios from "../../data/usuarios";

import Link from "../../components/navegacion/Link";

//Pagina de usuarios. Muesta una lista de todos los registros
const Usuarios = () => {
    let data = []
    for(let i = 0; i < sample_usuarios.length; i++)
    {
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