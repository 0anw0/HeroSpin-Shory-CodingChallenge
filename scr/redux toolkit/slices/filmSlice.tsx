import {createSlice} from '@reduxjs/toolkit';

export const filmInfoSlice = createSlice({
  name: 'filmInfoSlice',
  initialState: {
    allfilms: [],
    selected: {},
    pickedSuperHeroName: '',
  },
  reducers: {
    addNewFilm: (state, payload) => {
      return ({...state, allfilms: payload.payload})
    },
    selectedFilm: (state, payload) => {
      return ({...state, selected: payload.payload})
    },
    addSuperHeroName: (state, payload) => {
      return ({
        ...state,
        pickedSuperHeroName: payload.payload,
      })
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNewFilm, addSuperHeroName, selectedFilm} =
  filmInfoSlice.actions;

export default filmInfoSlice.reducer;
