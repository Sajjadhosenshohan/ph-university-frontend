import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagementApi";

type TTableData = {
  name: string;
  academicFaculty: string
} 

const AcademicDepartment = () => {
  const { data: departmentData,isFetching } = useGetAllAcademicDepartmentQuery([]);
  console.log(departmentData,11);

  const tableData = departmentData?.data?.map(
    ({ name,academicFaculty }) => ({
      name,
      academicFaculty: academicFaculty?.name
    })
  ) as TTableData[];

  console.log(tableData,20)

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      // filters: [
      //   {
      //     text: "Autumn",
      //     value: "Autumn",
      //   },
      //   {
      //     text: "Summer",
      //     value: "Summer",
      //   },
      //   {
      //     text: "Fall",
      //     value: "Fall",
      //   },
        
      // ],
      // specify the condition of filtering result
    },
    {
      title: "Academic Faculty",
      key: "academicFaculty",
      dataIndex: "academicFaculty",
    }
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra

    // pagination, sorter,
  ) => {
    console.log("params", filters, extra);
    // if (extra.action === "filter") {
    //   const queryParams:TQueryParams[] = [];

    //   filters?.name?.forEach((item) => {
    //     console.log(item,94)
    //     return queryParams.push({ name: "name", value: item });
    //   });

    //   setParams(queryParams);
    // }
  };
  return (
    <Table<TTableData>
    loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicDepartment;
