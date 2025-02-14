import { Controller } from "react-hook-form";
type TFormInput = {
    type: string;
    name: string;
    label: string
}
const PHInput = ({ type, name, label }: TFormInput) => {

  return (
    <div style={{marginBottom: "20px" }}>
      <label htmlFor={label} style={{display: "block"}}>{label} </label>

      {/* <input type={type} id={name} {...register(name)} /> */}
      <Controller
        name={name}
        render={({ field}) => (
          <input {...field} type={type} id={name} />
        )}
      />
    </div>
  );
};

export default PHInput;
