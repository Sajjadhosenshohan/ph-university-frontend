import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { nameOptions, yearOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagementSchema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { toastObj } from "../../../utils/toast";
import { TResponse } from "../../../types/global";
import { TAcademicSemester } from "../../../types/academicManagement.type";

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const name = nameOptions[Number(data.name) - 1].label;
      const toastId = toast.loading("Creating....");

      const semesterData = {
        name,
        code: data.name,
        year: data.year,
        startMonth: data.startMonth,
        endMonth: data.endMonth,
      };

      const res = (await addAcademicSemester(
        semesterData
      )) as TResponse<TAcademicSemester>;
      console.log(res, 29);

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
          resolver={zodResolver(academicSemesterSchema)}
        >
          {/* <PHInput type="text" name="Semester Name" label="Semester name: " /> */}
          <PHSelect name="name" label="Semester name" options={nameOptions} />
          <PHSelect name="year" label="Year" options={yearOptions} />
          <PHSelect
            name="startMonth"
            label="Start month"
            options={monthOptions}
          />
          <PHSelect name="endMonth" label="End month" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
