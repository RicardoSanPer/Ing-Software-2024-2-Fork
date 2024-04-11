import { NavLink } from 'react-router-dom';

import "./Link.css"

/**
 * Componente de boton de redireccionamiento. Renderiza un boton estilizado que reenvia al usuario a una
 * direccion al ser presionado.
 * @param {string} url : direccion a la que redirige
 * @param {string} texto : texto a mostrar en el boton
 * @param {string} variante : tipo de variante para el estilizado (ver, modificar, eliminar)
 * @returns : Componente de boton de redireccionamiento
 */
function Link({url, texto, variante})
{
    let class_Name = "link-boton";

    if(variante == null || variante === "navegacion")
    {
        class_Name += " link-nav link-large"
    }
    else if(variante === "ver")
    {
        class_Name += " link-ver link-small"
    }
    else if(variante === "modificar")
    {
        class_Name += " link-mod link-small"
    }
    else if(variante === "eliminar")
    {
        class_Name += " link-del link-small"
    }
    
    return <NavLink to={url} className={class_Name}><b>{texto}</b></NavLink>
}
    

export default Link;