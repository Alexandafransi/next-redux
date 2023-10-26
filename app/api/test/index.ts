import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    keepUnusedDataFor:30, //global configuration for api
    endpoints: (builder) => ({
        getProductByName: builder.query({
            query: () => `users`,
            // for individual endpoint
            keepUnusedDataFor: 5
        }),
    }),
});

export const {useGetProductByNameQuery} = productsAPI;