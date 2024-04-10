import "./formFields.css"

//TODO: Funcionalidad para determinar si un campo es requerido o no
const TextInput = ({name, label, defaultValue, required}) =>
{
    return(
    <div className="form-field">
        <label className="input-label"><b>{label}</b></label>
        <input type="text" name={name} defaultValue={defaultValue} className="field-text" required={required}/>
    </div>
    );
};

export default TextInput;