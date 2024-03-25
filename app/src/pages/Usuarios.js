import React from "react";
import DataSimple from "../components/data/DataSimple";

const Usuarios = () => {
    return (
        <div>
            <h1>Pagina de Usuarios</h1>
            <DataSimple id="1" mainData="Datos Principales" secondaryData="Datos Secundarios" otherData="Otros datos"/>
        </div>
    );
};
 
export default Usuarios;