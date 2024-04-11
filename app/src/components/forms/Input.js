import "./formFields.css"

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