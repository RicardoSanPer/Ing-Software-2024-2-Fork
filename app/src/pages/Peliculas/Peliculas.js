import React from "react";
import DataSimple from "../../components/data/DataSimple";


import Link from "../../components/navegacion/Link";
import sample_peliculas from "../../data/peliculas";

/**
 * Pagina principal de usuarios.
 * Muestra una lista con información simplificada de usuarios junto con sus
 * respectivos botones para ver, modificar o eliminar un registro
 */
const Peliculas = () => {
    let data = []
    for(let i = 0; i < sample_peliculas.length; i++)
    {
        if(sample_peliculas[i] == null)
        {
            continue;
        }
        data.push(
        //agregar todos los datos a la lista
        <DataSimple id={i} entryType={"peliculas"} dict={
            {"Nombre":sample_peliculas[i].nombre,
            "Inventario":sample_peliculas[i].inventario}
        }/>);
    }
    return (
        <div>
            <h1>Pagina de Peliculas</h1>
            <Link url="/peliculas/crear" texto="Crear Nuevo"/>
            {data}
        </div>
    );
};
 
export default Peliculas;