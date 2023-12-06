import { createSlice } from '@reduxjs/toolkit';
import { testAction } from './operations';

const initialState = {
  ids: [],
  isLoading: false,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder.addCase(testAction.fulfilled, (state, action) => {
      state.ids = [...state.ids, action.payload];
    });
  },
});

export const favoritesReducer = favoriteSlice.reducer;
