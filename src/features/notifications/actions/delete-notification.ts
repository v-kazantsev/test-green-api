import { createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteNotification } from '@/api/delete-notification-api';
import { RootState } from '@/store/store';

export const deleteNotification = createAsyncThunk(
  'NOTIFICATION/DELETE',
  async (id: number, { rejectWithValue, getState }) => {
    const { credentials } = getState() as RootState;
    try {
      const { data } = await DeleteNotification.delete(id, credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);