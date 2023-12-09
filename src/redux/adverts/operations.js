import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from 'config';

export const getBrandes = createAsyncThunk(
  'adverts/brandes',
  async (_, { reject }) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/makes`);
      const brands = response.data.map(brand => {
        return { value: brand, label: brand };
      });
      return brands;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const getAdverts = createAsyncThunk(
  'adverts/adverts',
  async (params, { reject }) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/adverts/?${params}`);
      return response.data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
