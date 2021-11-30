import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const pageNameSlice = createSlice({
  name: 'pageName',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName } = pageNameSlice.actions

export default pageNameSlice.reducer