import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (build) => ({}),
});
export const {} = api;
