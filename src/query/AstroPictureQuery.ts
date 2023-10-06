import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const astroPictureApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nasa.gov/planetary/' }),
    endpoints: (builder) => ({
      getAstronomyPicture: builder.query({
        query: () => `apod?api_key=DEMO_KEY`,
      }),
    }),
});

export const {useGetAstronomyPictureQuery} = astroPictureApi
