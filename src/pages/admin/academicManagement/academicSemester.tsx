import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";

type TTableData = Pick<
  TAcademicSemester,
  "name" | "code" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data: semesterData,isFetching } = useGetAllAcademicSemesterQuery(params);
  console.log(semesterData);

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year, code }) => ({
      key: _id,
      name,
      code,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        
      ],
      // specify the condition of filtering result
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra

    // pagination, sorter,
  ) => {
    console.log("params", filters, extra);
    if (extra.action === "filter") {
      const queryParams:TQueryParams[] = [];

      filters?.name?.forEach((item) => {
        console.log(item,94)
        return queryParams.push({ name: "name", value: item });
      });

      setParams(queryParams);
    }
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

export default AcademicSemester;
