import React from "react";
import DataSimple from "../../components/data/DataSimple";
import sample_usuarios from "../../data/usuarios";

//Pagina de usuarios. Muesta una lista de todos los registros
const Usuarios = () => {
    let data = []
    for(let i = 0; i < sample_usuarios.length; i++)
    {
        data.push(<DataSimple id={i} dict={
            {"Nombre":sample_usuarios[i].nombre,
            "Apellido Paterno":sample_usuarios[i].apPat,
            "Correo":sample_usuarios[i].email}
        }/>);
    }
    return (
        <div>
            <h1>Pagina de Usuarios</h1>
            {data}
        </div>
    );
};
 
export default Usuarios;