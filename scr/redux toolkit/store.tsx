import {configureStore} from '@reduxjs/toolkit';

import filmSliceReducer from "./slices/filmSlice";

export const store = configureStore({
  reducer: filmSliceReducer,
});

