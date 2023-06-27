import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const expensesApi = createApi({
  reducerPath: "expensesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/dashboard/",
    prepareHeaders: async (headers, { getState }) => {
      const token = await getState().auth.token;
      if (token) {
        headers.set("token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => "expenses",
    }),
    addExpense: builder.mutation({
      query: (expense_details) => ({
        url: "expenses-add",
        method: "POST",
        body: expense_details,
      }),
    }),
    getSum: builder.query({
      query: () => "expenses-sum",
    }),
  }),
});

export const { useGetExpensesQuery, useAddExpenseMutation, useGetSumQuery } =
  expensesApi;