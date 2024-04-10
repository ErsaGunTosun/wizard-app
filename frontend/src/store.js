import { configureStore } from '@reduxjs/toolkit'

import formReducer from './stores/form'
import progressReducer from './stores/progress'

export default configureStore({
  reducer: {
    form: formReducer,
    progress: progressReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
})