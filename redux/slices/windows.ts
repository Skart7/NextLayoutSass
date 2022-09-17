import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store'

interface InitialStateProps {
  cart: boolean;
  login: boolean;
}

const initialState: InitialStateProps = {
  cart: false,
  login: false
}

export const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    setModalCart: (state, action: PayloadAction<boolean>) => {
      state.cart = action.payload
    },
    setModalLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload
    }
  }
})

export const { setModalCart, setModalLogin } = windowsSlice.actions
export const selectWindows = (state: AppState) => state.windows
export const windowsReducer = windowsSlice.reducer

