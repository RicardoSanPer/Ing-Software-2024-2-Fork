import "./formFields.css"

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