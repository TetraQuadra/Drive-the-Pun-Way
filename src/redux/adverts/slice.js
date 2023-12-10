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
  reducers: {
    toggleFavorite(state, { payload }) {
      if (state.favorites.includes(payload)) {
        state.favorites = state.favorites.filter(id => id !== payload);
        return;
      }
      state.favorites = [...state.favorites, payload];
    },
  },
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

export const { toggleFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
