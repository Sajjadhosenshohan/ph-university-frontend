import { baseApi } from "../../api/baseApi";

const academicApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAcademicSemester: build.query({
      query: () => ({
        url: `/academic-semesters`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllAcademicSemesterQuery } = academicApi;
