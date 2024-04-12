import "./formFields.css"

/**
 * Componente de input numerico
 * @param {string} name: nombre del campo
 * @param {string} type: tipo de campo (text, email, password, etc)
 * @param {string} label: texto a desplegar junto al campo
 * @param {string} value: valor del campo
 * @param {boolean} required: indicar si este campo es requerido en el form
 * @param {*} onChange: funcion que se encarga de procesar cambios en la entrada
 * @returns : Componente para el renderizado
 */
const NumberInput = ({name, label, value, required, onChange}) =>
{
    return(
    <div className="form-field">
        <label className="input-label" htmlFor={name}><b>{label}</b></label>
        <input type="number" id={name} name={name} value={value} className="field-text" required={required} onChange={onChange} min={0}/>
    </div>
    );
};

export default NumberInput;