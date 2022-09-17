import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { cartReducer } from './slices/cart'
import { windowsReducer } from './slices/windows'

export function makeStore() {
  return configureStore({
    reducer: {
        cart: cartReducer,
        windows: windowsReducer
    },
    devTools: true
  })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,AppState,unknown,Action<string>>

export const wrapper = createWrapper<AppStore>(makeStore)