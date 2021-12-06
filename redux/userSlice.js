import { createSlice } from '@reduxjs/toolkit'
import { userHelmut } from '../constants/data';

const initialState = {
  value: false,
  data: userHelmut
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      state.value = true;
    },
    logOut: (state) => {
      state.value = false;
    },
    editUser: (state, action) => {
      state.data = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, editUser } = userSlice.actions

export default userSlice.reducer
