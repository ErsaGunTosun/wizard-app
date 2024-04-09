import { createSlice } from '@reduxjs/toolkit'

export const form = createSlice({
    name: 'form',
    initialState: {
        youAre: {
            isOpen: false,
            value: ''
        },
        youHave: {
            isOpen: false,
            value: ''
        },
        typeOfProject: {
            isOpen: false,
            value: ''
        },
        budget: {
            isOpen: false,
            value: ''
        }
    },
    reducers: {
        setIsOpen: (state, action) => {
            state[action.payload.name].isOpen = action.payload.isOpen
        },
        setValue: (state, action) => {
            state[action.payload.name].value = action.payload.value
        }
    }
})

// Action creators are generated for each case reducer function
export const { setValue, setIsOpen } = form.actions

export default form.reducer