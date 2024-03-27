    import React from "react"
    import sample_usuarios from "../../data/usuarios"
    import Data from "../../components/data/Data";
    import Link from "../../components/navegacion/Link";
    const ReadUsuarios = ({id}) =>
    {
        let usuario = sample_usuarios[0];
        let data = {
            "ID de Usuario": id,
            "Nombre": usuario.nombre,
            "Apellido Paterno":usuario.apPat,
            "Apellido Materno":usuario.apMat,
            "Correo": usuario.email,
        };
        if(usuario.superUser)
        {
            data["Superusuario"] = true
        };
        return(
            <div className="data-container">
                <div>
                <Data data={data}/> 
                </div>
                <div class="data-buttons">
                    <Link url="" texto="Modificar" variante="modificar"/>
                    <Link url="" texto="Eliminar" variante="eliminar"/>
                </div>  
            </div>
        );
    };

    export default ReadUsuarios;