import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { toastObj } from "../../../utils/toast";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagementApi";
import { academicFacultySchema } from "../../../schemas/academicManagementSchema";
import PHInput from "../../../components/form/PHInput";
import {  TAcademicSemester } from "../../../types/academicManagement.type";
import { TResponse } from "../../../types/global";

export const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const toastId = toast.loading("Creating....");

      const semesterData = {
        name: data.name,
      };

      const res = await addAcademicFaculty(semesterData) as TResponse<TAcademicSemester>;
      

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

  return (
    <Flex justify="center" align="center" style={{ width: "100%" }}>
      <Col>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHInput type="text" name="name" label="Academic Faculty name" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};
