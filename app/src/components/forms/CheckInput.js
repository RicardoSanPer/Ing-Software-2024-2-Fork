import "./formFields.css"

/**
 * Componente de input de tipo checkbox para un formulario
 * @param {string} name: nombre del campo
 * @param {string} label: texto a desplegar junto al campo
 * @param {boolean} checked: indicar si el checkbox debe estar activado o no
 * @param {boolean} required: indicar si este campo es requerido en el form
 * @param {*} onChange: funcion que se encarga de procesar cambios en la entrada
 * @returns : Componente para el renderizado
 */
const CheckInput = ({name, label, checked, required, onChange}) =>
{
    return(
    <div className="form-field selector">
        <input type="checkbox" className="input-check" id={name} name={name} required={required} checked={checked} onChange={onChange}/>
        <label htmlFor={name}><b>{label}</b></label>
    </div>
    );
};

export default CheckInput;