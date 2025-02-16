export type TAcademicSemester = {
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAcademicFaculty = {
  name: string;
  _id?: string;
};

export type TAcademicDepartment = {
  name: string;
  academicFaculty: {
    name: string;
    _id?: string;
  };
};
