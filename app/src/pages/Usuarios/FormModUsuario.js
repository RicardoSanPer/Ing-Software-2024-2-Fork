import {React, useState} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useNavigate} from 'react-router-dom';

import Input from "../../components/forms/Input";
import Link from "../../components/navegacion/Link";
import CheckInput from "../../components/forms/CheckInput";

/**
 * Formulario para modificar un registro de usuario existente
 * @param {number} id : id del usuario a modificar
 * @returns 
 */
function FormModUsuarios({id})
{
    let usuario = sample_usuarios[id];
    let navigate = useNavigate();

    const [inputs, setInputs] = useState(usuario);

    //OnChange
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
    
        const newValue = type === 'checkbox' ? checked : value;
        
        setInputs(values => ({...values, [name]: newValue}));
      }
      

    //OnSubmit
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        sample_usuarios[id] = inputs;
        alert("Usuario actualizado con éxito.");
        navigate(`/usuarios/ver/${id}`);
    }
    
    return (
    <form onSubmit={handleSubmit} className="data-container">
        <div className="data-container-data">
        <Input type="text" name="nombre" label="Nombre" value={inputs.nombre} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="apPat" label="Apellido Paterno" value={inputs.apPat} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="apMat" label="Apellido Materno" value={inputs.apMat} required={false} onChange={(e) => handleChange(e)} />
        <Input type="email" name="email" label="Correo" value={inputs.email} required={false} onChange={(e) => handleChange(e)} />
        <CheckInput name="superUser" label="Super Usuario" checked={inputs.superUser} required={false} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="data-buttons">
            <Link url={`/usuarios/ver/${id}`} texto="Volver" variante="ver"/>
            <input type="submit" className="link-boton link-mod" value="Enviar"/>
        </div>
    </form>);
};

export default FormModUsuarios;