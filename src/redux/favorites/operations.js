import { createAsyncThunk } from '@reduxjs/toolkit';

export const testAction = createAsyncThunk(
  'contacts/allContacts',
  async (token, { reject }) => {
    try {
      const data = 'test';
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
