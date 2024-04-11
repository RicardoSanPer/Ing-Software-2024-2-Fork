import "./formFields.css"

/**
 * Componente de input generico para campos de entrada de texto
 * @param {string} name: nombre del campo
 * @param {string} type: tipo de campo (text, email, password, etc)
 * @param {string} label: texto a desplegar junto al campo
 * @param {string} value: valor del campo
 * @param {boolean} required: indicar si este campo es requerido en el form
 * @param {*} onChange: funcion que se encarga de procesar cambios en la entrada
 * @returns : Componente para el renderizado
 */
const Input = ({name, type, label, value, required, onChange}) =>
{
    return(
    <div className="form-field">
        <label className="input-label" htmlFor={name}><b>{label}</b></label>
        <input type={type} id={name} name={name} value={value} className="field-text" required={required} onChange={onChange}/>
    </div>
    );
};

export default Input;