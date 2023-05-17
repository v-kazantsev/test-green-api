import { createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteNotification } from '@/api/delete-notification-api';

export const deleteNotification = createAsyncThunk(
  'NOTIFICATION/DELETE',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await DeleteNotification.delete(id);
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);