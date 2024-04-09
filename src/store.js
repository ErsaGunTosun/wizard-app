import { configureStore } from '@reduxjs/toolkit'

import formReducer from './stores/form'

export default configureStore({
  reducer: {
    form: formReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
})