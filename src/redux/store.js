import cartSlice from './slices/cartSlice'
import gameSlice from './slices/gameSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: {
      cartSlice,
      gameSlice
    },
  })