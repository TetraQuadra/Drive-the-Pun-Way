import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from 'config';
import { parseAddress } from 'helpers/parseAddress';

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
      const response = await axios.get(
        `${BASE_API_URL}/adverts/?sortBy=rentalPrice&${params}`
      );
      const handledData = parseAddress(structuredClone(response.data));
      return handledData;
    } catch (error) {
      return reject(error.message);
    }
  }
);
