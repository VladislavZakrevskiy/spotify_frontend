import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const trackAPI = createApi({
    reducerPath: 'Tracks',
    tagTypes: ['Tracks'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000' + '/track'
    }),
    endpoints: (build) => ({
        addComment: build.mutation({
            query: ({track_id, username, text}) => ({
                url: '/comment',
                body: {track_id, username, text},
                method: "POST"
            })
        })
    }),

})

export const {useAddCommentMutation} = trackAPI