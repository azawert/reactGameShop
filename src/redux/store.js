import cartSlice from './slices/cartSlice'
import gameSlice from './slices/gameSlice'
import gamesSlice from './slices/gamesSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: {
      cartSlice,
      gameSlice,
      gamesSlice
    },
  })