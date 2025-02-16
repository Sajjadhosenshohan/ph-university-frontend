import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagementApi";


type TTableData = {
  name: string
}


const AcademicFaculty = () => {
  const { data: facultyData,isFetching } = useGetAllAcademicFacultyQuery(undefined);
  console.log(facultyData);

  const tableData = facultyData?.data?.map(
    ({ name }) => ({
      name
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
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

export default AcademicFaculty;
