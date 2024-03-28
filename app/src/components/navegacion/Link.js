import { NavLink } from 'react-router-dom';

import "./Link.css"

//Componente de boton de vinculo
//Toma como parametro la url a donde redirecciona, el texto con el que se renderiza el boton
//y el tipo de boton
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