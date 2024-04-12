import {React, useState} from "react"
import sample_peliculas from "../../data/peliculas"   


import { useNavigate} from 'react-router-dom';
import Input from "../../components/forms/Input";
import Link from "../../components/navegacion/Link";
import CheckInput from "../../components/forms/CheckInput";
import NumberInput from "../../components/forms/NumberInput";

/**
 * Form para crear Peliculas
 */
function FormCrearPeliculas()
{
    let navigate = useNavigate();

    const [inputs, setInputs] = useState(
        {
            "nombre": null,
            "genero":null,
            "duracion":null,
            "inventario": 1
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
        sample_peliculas.push(inputs);
        let id = sample_peliculas.length - 1;
        alert("Pelicula creada con éxito.");
        navigate(`/peliculas/ver/${id}`);
    }
    
    return (
    <form onSubmit={handleSubmit} className="data-container">
        <div className="data-container-data">
        <Input type="text" name="nombre" label="Nombre" value={inputs.nombre} required={true} onChange={(e) => handleChange(e)} />
        <Input type="text" name="genero" label="Genero" value={inputs.genero} required={false} onChange={(e) => handleChange(e)} />
        <NumberInput name="duracion" label="Inventario" value={inputs.duracion} required={false} onChange={(e) => handleChange(e)}/>
        <NumberInput name="inventario" label="Inventario" value={inputs.inventario} required={false} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="data-buttons">
            <Link url={`/peliculas/`} texto="Volver" variante="ver"/>
            <input type="submit" className="link-boton link-mod" value="Enviar"/>
        </div>
    </form>);
};

export default FormCrearPeliculas;