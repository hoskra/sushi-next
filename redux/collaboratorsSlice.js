import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [3, 4]
}

export const collaboratorSlice = createSlice({
  name: 'collaborator',
  initialState,
  reducers: {
    addCollaborator: (state, action) => {
      state.value.push(action.payload.id)
    },
    removeCollaborator: (state, action) => {
      let newArr = state.value;
      newArr = newArr.filter(item => item !== action.payload.id);
      state.value = newArr;
    },
  },
})

export const { addCollaborator, removeCollaborator } = collaboratorSlice.actions
export default collaboratorSlice.reducer