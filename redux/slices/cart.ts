import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store'

export interface CartItem {
  id: string,
  label: string,
  price: number,
  images: string,
  totalPrice: number,
  count: number
}

export interface initialStateProps {
  items: CartItem[],
  qty: number,
  amount: number
}

const initialState: initialStateProps = {
  items: [],
  qty: 0,
  amount: 0
}

const name = 'cart'

const totalQty = (storage: initialStateProps) => storage.qty = storage.items.reduce((acc, i) => acc + (i.count), 0)
const totalAmount = (storage: initialStateProps) => storage.amount = storage.items.reduce((acc, i) => acc + (i.price * i.count), 0)
const saveStorageCart = (storage:initialStateProps) => window.localStorage.setItem(name, JSON.stringify(storage))

const getStorageCart = ():initialStateProps => {
  if (typeof window !== 'undefined') {
    const storage = JSON.parse(window.localStorage.getItem(name) as string)
    if (storage) {
      return storage
    }
  }
  return initialState
}

export const cartSlice = createSlice({
  name,
  initialState: getStorageCart(),
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existItem = state.items.find(i => i.id === action.payload.id)

      if (existItem) {
        existItem.count++
        existItem.totalPrice = existItem.totalPrice + action.payload.price
      }
      else {
        state.items.push({
          id: action.payload.id,
          label: action.payload.label,
          price: action.payload.price,
          totalPrice: action.payload.price,
          count: 1,
          images: action.payload.images[0]
        })
      }
      totalAmount(state)
      totalQty(state)
      saveStorageCart(state)
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const existItem = state.items.find(i => i.id === action.payload.id)

      if (existItem && existItem.count === 1) {
        state.items.splice(state.items.indexOf(existItem), 1)
      }
      else if (existItem) {
        existItem.count--
        existItem.totalPrice = existItem.totalPrice - action.payload.price
      }
      totalAmount(state)
      totalQty(state)
      saveStorageCart(state)
    },
    resetCart: (state) => {
      Object.assign(state, initialState)
      saveStorageCart(state)
    },
    deleteFromCart: (state, action: PayloadAction<CartItem>) => {
      const existItem = state.items.find(i => i.id === action.payload.id)

      if (existItem) {
        state.items.splice(state.items.indexOf(existItem), 1)
      }

      totalAmount(state)
      totalQty(state)
      saveStorageCart(state)
    }

  }
})

export const { addToCart, removeFromCart, resetCart, deleteFromCart } = cartSlice.actions
export const selectCart = (state: AppState) => state.cart
export const cartReducer = cartSlice.reducer

