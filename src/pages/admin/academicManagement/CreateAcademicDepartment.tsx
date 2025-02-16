import { Button, Col, Flex } from "antd";
import {
  useAddAcademicDepartmentMutation,
  useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TAcademicDepartment } from "../../../types/academicManagement.type";
import { TResponse } from "../../../types/global";
import { toastObj } from "../../../utils/toast";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../schemas/academicManagementSchema";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";

type TNames = {
  value: string, label: string
}
const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data: getAllFacultyData } = useGetAllAcademicFacultyQuery(
    []
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const toastId = toast.loading("Creating....");

      const departmentData = {
        name: data.name,
        academicFaculty: data.academicFaculty,
      };

      console.log(departmentData,36)

      const res = (await addAcademicDepartment(
        departmentData
      )) as TResponse<TAcademicDepartment>;
     

      if (res?.data?.success) {
        toast.success(res.data.message, toastObj(toastId));
      }
      if (res?.error?.status) {
        toast.error(
          res?.error?.data?.message || "Something went wrong",
          toastObj(toastId)
        );
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const names = getAllFacultyData?.data?.map((item) => ({
    value: item?._id, // ✅ _id পাঠানো হবে
    label: item?.name, // ✅ name দেখানো হবে
  })) as TNames[];


  return (
    <Flex justify="center" align="center" style={{ width: "100%" }}>
      <Col>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHInput type="text" name="name" label="Department name: " />
          <PHSelect
            name="academicFaculty"
            label="Academic faculty name"
            options={names}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
