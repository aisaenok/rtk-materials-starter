import { configureStore } from '@reduxjs/toolkit'
import materialsReducer from './store/materialsSlice'

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
  },
})