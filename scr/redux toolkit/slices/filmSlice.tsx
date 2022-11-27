import { createSlice } from '@reduxjs/toolkit'


export const filmInfoSlice = createSlice({
  name: 'filmInfoSlice',          
  initialState: {
    film:{},
    pickedSuperHeroId: -2, // id = -1 was used in flatList Rendering to achieve animating purposes
  },
  reducers: {
    addNewFilm: (state, film) => {
      let newState = {...state, film}
      return newState
    },
  }
})

// Action creators are generated for each case reducer function
export const { addNewFilm } = filmInfoSlice.actions

export default filmInfoSlice.reducer