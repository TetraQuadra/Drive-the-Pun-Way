import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
  isLoading: false,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: {},
});

export const favoritesReducer = favoriteSlice.reducer;
