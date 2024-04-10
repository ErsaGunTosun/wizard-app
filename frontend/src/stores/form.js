import { createSlice } from '@reduxjs/toolkit'

export const form = createSlice({
    name: 'form',
    initialState: {
        youAre: {
            isOpen: false,
            isError: false,
            value: ''
        },
        youHave: {
            isOpen: false,
            isError: false,
            value: ''
        },
        typeOfProject: {
            isOpen: false,
            isError: false,
            value: ''
        },
        budget: {
            isOpen: false,
            isError: false,
            value: ''
        }
    },
    reducers: {
        setIsOpen: (state, action) => {
            state[action.payload.name].isOpen = action.payload.isOpen
        },
        setValue: (state, action) => {
            state[action.payload.name].value = action.payload.value
        },
        setError: (state, action) => {

            state[action.payload.name].isError = action.payload.isError
        }
    }
})

// Action creators are generated for each case reducer function
export const { setValue, setIsOpen,setError } = form.actions

export default form.reducer