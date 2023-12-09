import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, getBrandes } from './operations';

const initialState = {
  favorites: [],
  brands: [],
  adverts: [],
  isLoading: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBrandes.fulfilled, (state, { payload }) => {
        state.brands = payload;
      })
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.adverts = payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
