import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items : 0,

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.items += 1
    },
    decrement: (state) => {
      state.items -= 1
    },
    incrementByAmount: (state, action) => {
      state.items += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer