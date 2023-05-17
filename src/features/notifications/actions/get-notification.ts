import { createAsyncThunk } from '@reduxjs/toolkit';
import { TextNotification } from '@/api/get-notification-api';
import { deleteNotification } from '@/features/notifications/actions/delete-notification';

export const getNotification = createAsyncThunk(
  'NOTIFICATION/GET',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await TextNotification.getNotification();
      if ((response as any).ok) dispatch(deleteNotification(response.data?.receiptId))
      return response.data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
