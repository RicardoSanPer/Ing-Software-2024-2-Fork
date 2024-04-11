import "./formFields.css"

const CheckInput = ({name, label, defaultValue, required}) =>
{
    return(
    <div className="form-field selector">
        <input type="checkbox" className="input-check" id={name} name={name} required={required} defaultChecked={defaultValue ? true : false}/>
        <label htmlFor={name}><b>{label}</b></label>
    </div>
    );
};

export default CheckInput;