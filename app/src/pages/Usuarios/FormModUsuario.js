import {React, useState} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useParams, Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Input from "../../components/forms/Input";
import Link from "../../components/navegacion/Link";
import CheckInput from "../../components/forms/CheckInput";

function FormModUsuarios({id})
{
    let usuario = sample_usuarios[id];

    const [inputs, setInputs] = useState(usuario);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
      }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        sample_usuarios[id] = inputs;
        alert("Usuario actualizado con éxito.");
    }
    
    return (
    <form onSubmit={handleSubmit} className="data-container">
        <div className="data-container-data">
        <Input type="text" name="nombre" label="Nombre" defaultValue={inputs.nombre} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="apPat" label="Apellido Paterno" defaultValue={inputs.apPat} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="apMat" label="Apellido Materno" defaultValue={inputs.apMat} required={true} onChange={(e) => handleChange(e)} />
        <Input type="email" name="email" label="Correo" defaultValue={inputs.email} required={true} onChange={(e) => handleChange(e)} />
        </div>
        <div className="data-buttons">
            <Link url={`/usuarios/ver/${id}`} texto="Volver" variante="ver"/>
            <input type="submit" className="link-boton link-mod" value="Enviar"/>
        </div>
    </form>);
};

export default FormModUsuarios;