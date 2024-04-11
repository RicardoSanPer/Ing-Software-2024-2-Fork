import {React, useState} from "react"
import sample_usuarios from "../../data/usuarios"   


import { useParams, Navigate, useNavigate} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Input from "../../components/forms/Input";
import Link from "../../components/navegacion/Link";
import CheckInput from "../../components/forms/CheckInput";

//Formulario para modificar un usuario
function FormCrearUsuarios()
{
    let navigate = useNavigate();

    const [inputs, setInputs] = useState(
        {
            "nombre": null,
            "apPat":null,
            "apMat":null,
            "email":null,
            "password":null,
            "superUser":false
        }
        );

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
        sample_usuarios.push(inputs);
        let id = sample_usuarios.length - 1;
        alert("Usuario creado con éxito.");
        navigate(`/usuarios/ver/${id}`);
    }
    
    return (
    <form onSubmit={handleSubmit} className="data-container">
        <div className="data-container-data">
        <Input type="text" name="nombre" label="Nombre" value={inputs.nombre} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="apPat" label="Apellido Paterno" value={inputs.apPat} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="apMat" label="Apellido Materno" value={inputs.apMat} required={false} onChange={(e) => handleChange(e)} />
        <Input type="email" name="email" label="Correo" value={inputs.email} required={false} onChange={(e) => handleChange(e)} />
        <Input type="password" name="password" label="Contraseña" value={inputs.password} required={true} onChange={(e) => handleChange(e)} />
        <CheckInput name="superUser" label="Super Usuario" checked={inputs.superUser} required={false} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="data-buttons">
            <Link url={`/usuarios/`} texto="Volver" variante="ver"/>
            <input type="submit" className="link-boton link-mod" value="Enviar"/>
        </div>
    </form>);
};

export default FormCrearUsuarios;