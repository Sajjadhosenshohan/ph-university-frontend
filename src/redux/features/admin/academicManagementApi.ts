import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagement = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic semester
    getAllAcademicSemester: build.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item:TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/academic-semesters`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: res?.data,
          meta: res?.meta,
        };
      },
    }),

    addAcademicSemester: build.mutation({
      query: (data) => ({
        url: `/academic-semesters/create-academic-semester`,
        method: "POST",
        body: data,
      }),
    }),

    // academic faculty
    getAllAcademicFaculty: build.query({
      query: (args) => {
        // const params = new URLSearchParams();

        // if (args) {
        //   args?.forEach((item:TQueryParams) => {
        //     params.append(item.name, item.value as string);
        //   });
        // }

        return {
          url: `/academic-faculties`,
          method: "GET",
          // params: params,
        };
      },
      transformResponse: (res: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: res?.data,
          meta: res?.meta,
        };
      },
    }),

    addAcademicFaculty: build.mutation({
      query: (data) => ({
        url: `/academic-faculties/create-academic-faculty`,
        method: "POST",
        body: data,
      }),
    }),

    //academic department
    getAllAcademicDepartment: build.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item:TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/academic-departments`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: res?.data,
          meta: res?.meta,
        };
      },
    }),

    addAcademicDepartment: build.mutation({
      query: (data) => ({
        url: `/academic-departments/create-academic-department`,
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const {
  useGetAllAcademicSemesterQuery,
  useAddAcademicSemesterMutation,
  useAddAcademicFacultyMutation,
  useGetAllAcademicFacultyQuery,
  useAddAcademicDepartmentMutation,
  useGetAllAcademicDepartmentQuery
} = academicManagement;
