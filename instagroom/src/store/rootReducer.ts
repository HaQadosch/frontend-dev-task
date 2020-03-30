import { counterSlice } from "./slices/counter"
import { unsplashSlice } from "./slices/unsplash";
import { combineReducers } from "@reduxjs/toolkit"


const {
  reducer: counterReducer,
  actions: { increment, decrement }
} = counterSlice

const {
  reducer: unsplashReducer,
  actions: { increment: unsplashInc, decrement: unsplashDec },
} = unsplashSlice

export const rootReducer = combineReducers({
  counter: counterReducer,
  unsplash: unsplashReducer
})

export type RootState = ReturnType<typeof rootReducer>

export {
  increment, decrement,
  unsplashInc, unsplashDec
}