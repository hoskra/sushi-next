import { createSlice } from '@reduxjs/toolkit'
import { textbooks } from '../constants/data';

const initialState = {
  value: textbooks,
}

export const textbookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    addTextbook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTextbook: (state, action) => {
      let newArr = state.value;
      let changed = newArr.filter(item => item.id === action.payload)[0];
      newArr = newArr.filter(item => item.id !== action.payload);
      changed.deleted = true;
      newArr.push(changed);

      state.value = newArr;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTextbook, deleteTextbook } = textbookSlice.actions

export default textbookSlice.reducer