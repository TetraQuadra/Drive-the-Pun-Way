import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, getBrandes } from './operations';

const initialState = {
  modal: null,
  favorites: [],
  brands: [],
  adverts: [],
  isLoading: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    //Since Mockapi.io does not allow multiple results to be returned in response to a query with an array of id's, it is necessary to store entire adverts. In the real API to ensure data consistency when ads may change over time, only the advert id's can be stored here, but
    toggleFavorite(state, { payload }) {
      const existingIndex = state.favorites.findIndex(
        ad => ad.id === payload.id
      );
      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
        return;
      }
      state.favorites = [...state.favorites, payload];
    },
    openModal(state, { payload }) {
      state.modal = payload;
    },
    closeModal(state) {
      state.modal = null;
    },
    emptyAdverts(state) {
      state.adverts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBrandes.fulfilled, (state, { payload }) => {
        state.brands = payload;
      })
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
      });
  },
});

export const { toggleFavorite, openModal, closeModal, emptyAdverts } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
