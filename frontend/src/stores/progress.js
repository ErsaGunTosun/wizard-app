import { createSlice } from '@reduxjs/toolkit'

export const progress = createSlice({
    name: 'progress',
    initialState: {
        progressId: 1
    },
    reducers: {
        nextProgress: (state) => {
            if(state.progressId === 3){
                state.progressId = -1
                return
            }
            state.progressId += 1
        },
        prevProgress: (state) => {
            if(state.progressId === 1){
                state.progressId = 0
                return
            }
            state.progressId -= 1
        },
    }
})

// Action creators are generated for each case reducer function
export const { nextProgress, prevProgress } = progress.actions

export default progress.reducer