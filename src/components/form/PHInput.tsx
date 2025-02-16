import { Form } from "antd";
import { Controller } from "react-hook-form";
type TFormInput = {
    type: string;
    name: string;
    label: string
}
const PHInput = ({ type, name, label }: TFormInput) => {

  return (
    <div style={{marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field}) => (
          <Form.Item label={label}>
            <input {...field} type={type} id={name} style={{padding: "5px 10px" , marginTop: "5px"}}/>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
