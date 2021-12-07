import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    all: (state ) => {
      state.value = 0;
      },
    trending: (state) => {
      state.value = 1;
    },
    sharedWithMe: (state) => {
      state.value = 2;
    },
    myTextbooks: (state) => {
      state.value = 3;
    },
    favourites: (state) => {
      state.value = 4;
    },
  },
})

// Action creators are generated for each case reducer function
export const { all, trending, sharedWithMe, myTextbooks, favourites } = tabSlice.actions

export default tabSlice.reducer
