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
      if (state.value[action.payload]) {
        state.value[action.payload].deleted = true;
      }
    },
    addFavourite: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload].favourite = true;
        state.value[action.payload].tab.push(4);
      }
    },
    removeFavourite: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload].favourite = false;
        state.value[action.payload].tab = state.value[action.payload].tab.filter(tab => tab !== 4);
      }
    },
    addStar: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload].stars++;
        state.value[action.payload].starSet = true;
      }
    },
    removeStar: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload].stars--;
        state.value[action.payload].starSet = false;
      }
    },
    removePage: (state, action) => {
      if (state.value[action.payload.textbookId]) {
        state.value[action.payload.textbookId].pages =
        state.value[action.payload.textbookId].pages.filter(page => page.id !== action.payload.pageId);
      }
    },
    addPage: (state, action) => {
      if (state.value[action.payload.textbookId]) {
        state.value[action.payload.textbookId].pages.push(action.payload.page);
      }
    },
    editPage: (state, action) => {
      if (state.value[action.payload.textbookId]) {
        let id;
        for(let i=0; i < state.value[action.payload.textbookId].pages.length; i++) {
          if(state.value[action.payload.textbookId].pages[i].id === action.payload.pageId) {
            id = i;
            break;
          }
        }
        if (id !== undefined) {
          state.value[action.payload.textbookId].pages[id].name = action.payload.name;
          state.value[action.payload.textbookId].pages[id].content = action.payload.content;
        }
      }
    },
    makePublic: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload].private = false;
      }
    },
    makePrivate: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload].private = true;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTextbook, deleteTextbook, 
               addFavourite, removeFavourite,
               addStar, removeStar,
               addPage, removePage, editPage,
               makePublic, makePrivate
            } = textbookSlice.actions

export default textbookSlice.reducer
