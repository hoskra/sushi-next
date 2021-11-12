import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    trending: (state) => {
      state.value = 0;
    },
    sharedWithMe: (state) => {
      state.value = 1;
    },
    myTextbooks: (state) => {
      state.value = 2;
    },
    favourites: (state) => {
      state.value = 3;
    },
  },
})

// Action creators are generated for each case reducer function
export const { trending, sharedWithMe, myTextbooks, favourites } = tabSlice.actions

export default tabSlice.reducer