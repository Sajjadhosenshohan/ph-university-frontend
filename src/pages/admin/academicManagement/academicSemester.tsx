import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicManagement/academicSemesterApi";

const AcademicSemester = () => {
  const {data} = useGetAllAcademicSemesterQuery(undefined);
  console.log(data?.data);
  return <div>academicSemester</div>;
};

export default AcademicSemester;
