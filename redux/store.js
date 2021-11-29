// https://redux-toolkit.js.org/tutorials/quick-start

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import tabSlice from './tabSlice'
import collaboratorSlice from './collaboratorsSlice'
import textbookSlice from './textbookSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    tab: tabSlice,
    collaborator: collaboratorSlice,
    textbook: textbookSlice,
  },
})