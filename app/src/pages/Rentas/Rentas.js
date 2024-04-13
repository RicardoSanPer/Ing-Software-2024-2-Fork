import React from "react";
import DataSimple from "../../components/data/DataSimple";
import sample_rentas from "../../data/rentas";

import Link from "../../components/navegacion/Link";
import EstadoRenta from "../../data/rentas_util";

/**
 * Pagina principal de usuarios.
 * Muestra una lista con información simplificada de usuarios junto con sus
 * respectivos botones para ver, modificar o eliminar un registro
 */
const Rentas = () => {
    let data = []

    for(let i = 0; i < sample_rentas.length; i++)
    {
        if(sample_rentas[i] == null)
        {
            continue;
        }

        let message = EstadoRenta(sample_rentas[i])

        data.push(
        //agregar todos los datos a la lista
        <DataSimple id={i} entryType={"rentas"} dict={
            {
            "Fecha de Renta":sample_rentas[i].fecha_renta,
            "Estado": message}
        } eliminar={false} aditionalTags={message == "En Retraso" && "warning"}/>);
    }
    return (
        <div>
            <h1>Pagina de Rentas</h1>
            <div className="nav-bar-container"><Link url="/rentas/crear" texto="Agregar Renta"/></div>
            <div className="grid">{data}</div>
        </div>
    );
};
 
export default Rentas;