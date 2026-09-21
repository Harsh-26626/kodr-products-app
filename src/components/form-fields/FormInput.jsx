const FormInput = (props) => {
  return (
    <div className="w-max gap-2 flex flex-col m-auto">
      <label htmlFor={"form-"+props.field} className="text-lg text-amber-50 cursor-text">
        {props.label}:
      </label>
      <input
        value={props.fieldValue}
        onChange={props.handleFieldChange}
        id={"form-"+props.field}
        className="border-2 rounded-lg p-1.5 text-amber-50"
        type={props.type}
        placeholder={props.placeholder}
        name={props.field}
        min={parseInt(props.min)}
        max={parseInt(props.max)}
      />
    </div>
  );
};

export default FormInput;
