import {React, useState} from "react"
import sample_peliculas from "../../data/peliculas"   


import { useNavigate} from 'react-router-dom';

import Input from "../../components/forms/Input";
import Link from "../../components/navegacion/Link";
import NumberInput from "../../components/forms/NumberInput";

/**
 * Formulario para modificar un registro de pelicula existente
 * @param {number} id : id de pelicula a modificar
 * @returns 
 */
function FormModPeliculas({id})
{
    let pelicula= sample_peliculas[id];
    let navigate = useNavigate();

    const [inputs, setInputs] = useState(pelicula);

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
        sample_peliculas[id] = inputs;
        alert("Pelicula actualizada con éxito.");
        navigate(`/peliculas/ver/${id}`);
    }
    
    return (
    <form onSubmit={handleSubmit} className="data-container">
    <h1>Modificar Registro de Película</h1>
    <h2>ID: {id}</h2>
        <div className="data-container-data">
        <Input type="text" name="nombre" label="Nombre" value={inputs.nombre} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="genero" label="Genero" value={inputs.genero} required={false} onChange={(e) => handleChange(e)} />
        <NumberInput name="duracion" label="Inventario" value={inputs.duracion} required={false} onChange={(e) => handleChange(e)}/>
        <NumberInput name="inventario" label="Duracion (Mins.)" value={inputs.inventario} required={false} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="data-buttons">
            <Link url={`/peliculas/ver/${id}`} texto="Volver" variante="ver"/>
            <input type="submit" className="link-boton link-mod" value="Enviar"/>
        </div>
    </form>);
};

export default FormModPeliculas;