import { createSlice } from '@reduxjs/toolkit'
import { textbooks } from '../constants/data';

const initialState = {
  value: textbooks.byId,
}

export const textbookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    addTextbook: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.id]: action.payload,
        },
      }
    },
    deleteTextbook: (state, action) => {
      state.value[action.payload].deleted = true;
    },
    addFavourite: (state, action) => {
      state.value[action.payload].favourite = true;
      state.value[action.payload].tab.push(3);
    },
    removeFavourite: (state, action) => {
      state.value[action.payload].favourite = false;
      state.value[action.payload].tab = state.value[action.payload].tab.filter(tab => tab !== 3);
    },
    addStar: (state, action) => {
      state.value[action.payload].stars++;
      state.value[action.payload].starSet = true;
    },
    removeStar: (state, action) => {
      state.value[action.payload].stars--;
      state.value[action.payload].starSet = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTextbook, deleteTextbook, addFavourite, removeFavourite, addStar, removeStar } = textbookSlice.actions

export default textbookSlice.reducer