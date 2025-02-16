import { BaseQueryApi } from '@reduxjs/toolkit/query';
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T & { success?: boolean; message?: string }; // ✅ data এর মধ্যে success & message থাকবে
  error?: TError & { status?: number }; // ✅ error এর মধ্যে status থাকবে
  meta?: {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };
};


export type TResponseRedux<T> = TResponse<T> & BaseQueryApi


export type TQueryParams = {
  name: string;
  value: boolean | React.Key
}
