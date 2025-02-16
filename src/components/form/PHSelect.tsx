import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
};
const PHSelect = ({ label, name, options }: TSelectProps) => {
  return (
    <div style={{width: ""}}>
      <Controller
        name={name}
        render={({ field , fieldState: {error}}) => (
          <Form.Item label={label} style={{width: "100%"}}>
            <Select
              {...field}
              options={options}
              size="large"
            />
            {
                error && <small style={{color: "red"}}>{error?.message}</small>
            }
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHSelect;
