import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/",
        prepareHeaders: async (headers, {getState}) => {
            const token = await getState().auth.token;
            if(token) {
                headers.set("token", token);
            };
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => 'dashboard'
        }),
    })
})

export const {useGetUserQuery} = userApi