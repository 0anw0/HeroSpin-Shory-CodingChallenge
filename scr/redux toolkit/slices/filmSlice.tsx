import { createSlice } from '@reduxjs/toolkit'


export const filmInfoSlice = createSlice({
  name: 'filmInfoSlice',          
  initialState: {},
  reducers: {
    addNewFilm: (state, film) => {
      let newState = film
      return newState
    },
  }
})

// Action creators are generated for each case reducer function
export const { addNewFilm } = filmInfoSlice.actions

export default filmInfoSlice.reducer