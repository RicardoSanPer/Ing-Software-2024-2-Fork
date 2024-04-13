import {React} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useParams, Navigate } from 'react-router-dom';
import sample_rentas from "../../data/rentas";

/**
 * Pagina para modificar un registro de usuario
 */
const ModRentas = () =>
{
    //Obtener id del usuario a modificar
    let { id } = useParams();
    id = parseInt(id);
    let renta = sample_rentas[id];
    //Regresar a pagina de usuarios si la informacion no existe
    if(!renta)
    {
        alert("Este registro no existe");
        return <Navigate to="/rentas" />;
    }
    let v = !sample_rentas[id].estatus;
    sample_rentas[id].estatus = v;
    
    return <Navigate to={`/rentas/ver/${id}`}/>;
};

export default ModRentas;