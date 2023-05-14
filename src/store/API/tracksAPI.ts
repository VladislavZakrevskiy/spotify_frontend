import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const trackAPI = createApi({
    reducerPath: 'Tracks',
    tagTypes: ['Tracks'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000' + '/track'
    }),
    endpoints: (build) => ({
        getTracks: build.query({
            query: () => '/',
            providesTags: (result, error, arg) =>
                result
                //@ts-ignore
                ? [...result.map(({ id }) => ({ type: 'Tracks' as const, id })), 'Tracks']
                : ['Tracks'],
        }),

        createTrack: build.mutation({
            query: (formData: FormData) => ({
                url: '/', 
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['Tracks']
        }),

        getTrackById: build.query({
            query: (id: string) => '/' + id
        })
    }),

})

export const {useGetTracksQuery, useCreateTrackMutation, useGetTrackByIdQuery} = trackAPI