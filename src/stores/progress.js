import { createSlice } from '@reduxjs/toolkit'

export const progress = createSlice({
    name: 'progress',
    initialState: {
        progressId: 1
    },
    reducers: {
        nextProgress: (state) => {
            state.progressId += 1
        },
        prevProgress: (state) => {
            state.progressId -= 1
        },
    }
})

// Action creators are generated for each case reducer function
export const { nextProgress, prevProgress } = progress.actions

export default progress.reducer