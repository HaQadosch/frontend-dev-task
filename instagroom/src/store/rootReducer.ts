import { unsplashSlice } from "./slices/unsplash";
import { combineReducers } from "@reduxjs/toolkit"

const {
  reducer: unsplashReducer,
  actions: { setPics },
} = unsplashSlice

export const rootReducer = combineReducers({
  unsplash: unsplashReducer
})

export type RootState = ReturnType<typeof rootReducer>

export {
  setPics
}