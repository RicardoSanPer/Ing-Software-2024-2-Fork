import React from "react";
import sample_rentas from "../../data/rentas";


import { useParams, Navigate } from 'react-router-dom';
import EstadoRenta from "../../data/rentas_util";
import DataRenta from "../../components/data/DataRenta";


/**
 * Pagina que despliega información más detallada de un usuario
 */
const ReadRentas = () =>
    {
        //Obtener id del usuario a ver
        let { id } = useParams();
        id = parseInt(id);
        let renta = sample_rentas[id];

        //Regresar a pagina de usuarios si la informacion no existe
        if(!renta)
        {
            alert("Este registro no existe");
            return <Navigate to="/rentas" />;
        }
        //Datos para renderizado. Etiqueta y valor a desplegar
        let data = {
            "ID de Renta": id,
            "ID de Usuario": renta.idUsuario,
            "ID de Pelicula":renta.idPelicula,
            "Fecha de Renta": renta.fecha_renta,
            "Dias" : renta.dias_de_renta,
            "Estado" : EstadoRenta(renta)
        };
        return(
            <DataRenta id={id} entryType={"rentas"} data={data}/>
        );
    };

    export default ReadRentas;