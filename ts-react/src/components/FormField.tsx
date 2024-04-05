import "./FormField.css";

type FormFieldProps = {
  id: string;
  type: "email" | "password";
  labelText: string;
  value: string;
  onChange: (value: string) => void;
};

export const FormField = ({
  id,
  type,
  labelText,
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="form-field-container">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </div>
  );
};
