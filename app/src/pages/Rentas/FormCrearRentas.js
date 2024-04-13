import {React, useState} from "react"
import sample_rentas from "../../data/rentas"   


import { useNavigate} from 'react-router-dom';
import Input from "../../components/forms/Input";
import Link from "../../components/navegacion/Link";
import CheckInput from "../../components/forms/CheckInput";
import NumberInput from "../../components/forms/NumberInput";

/**
 * Form para crear registros de renta
 */
function FormCrearRentas()
{
    let navigate = useNavigate();

    const [inputs, setInputs] = useState(
        {
            "idUsuario": null,
            "idPelicula":null,
            "fecha_renta": null,
            "dias_de_renta":5,
            "estatus":false,
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
        sample_rentas.push(inputs);
        let id = sample_rentas.length - 1;
        alert("Renta creada con éxito.");
        navigate(`/rentas/ver/${id}`);
    }
    
    return (
    <form onSubmit={handleSubmit} className="data-container">

        <h1>Creación de Nueva Renta</h1>
        <div className="data-container-data">
        <NumberInput name="idUsuario" label="ID de Usuario" value={inputs.idUsuario} required={true} onChange={handleChange} />
        <NumberInput name="idPelicula" label="ID de Pelicula" value={inputs.idPelicula} required={true} onChange={handleChange} />
        <Input name="fecha_renta" label="Fecha de Renta" value={inputs.fecha_renta} required={true} onChange={handleChange} type={"date"}/>
        <NumberInput name="dias_de_renta" label="Dias de Prestamo" value={inputs.dias_renta} required={false} onChange={handleChange}/>
        <CheckInput name="estatus" label="Devuelto" checked={inputs.estatus} required={false} onChange={handleChange}/>
        </div>
        <div className="data-buttons">
            <Link url={`/usuarios/`} texto="Volver" variante="ver"/>
            <input type="submit" className="link-boton link-mod" value="Enviar"/>
        </div>
    </form>);
};

export default FormCrearRentas;