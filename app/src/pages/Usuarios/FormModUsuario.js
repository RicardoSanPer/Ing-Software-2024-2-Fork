import {React, useState} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useParams, Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import TextInput from "../../components/forms/TextInput";
import Link from "../../components/navegacion/Link";

function FormModUsuarios({id})
{
    let usuario = sample_usuarios[id];
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}))
        console.log("Change");
      }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        Object.entries(usuario).map(([key, value]) => {
            if(inputs[key])
            {
                sample_usuarios[id][key] = inputs[key];
            }
        })
        alert("Usuario actualizado con éxito.");
    }

    return (
    <form onSubmit={handleSubmit} onChange={handleChange} className="data-container">
        <div className="data-container-data">
        <TextInput name="nombre" label="Nombre" defaultValue={usuario.nombre} required={true}/>
        <TextInput name="apPat" label="Apellido Paterno" defaultValue={usuario.apPat} required={false}/>
        <TextInput name="apMat" label="Apellido Materno" defaultValue={usuario.apMat} required={false}/>
        <TextInput name="email" label="Correo" defaultValue={usuario.email} required={false}/>
        </div>
        <div className="data-buttons">
            <Link url={`/usuarios/ver/${id}`} texto="Volver" variante="ver"/>
            <input type="submit" className="link-boton link-mod" value="Submit"/>
        </div>
    </form>);
};

export default FormModUsuarios;