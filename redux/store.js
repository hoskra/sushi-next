// https://redux-toolkit.js.org/tutorials/quick-start

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import tabSlice from './tabSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    tab: tabSlice,
  },
})