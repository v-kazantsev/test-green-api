import { createAsyncThunk } from '@reduxjs/toolkit';
import { TextNotification } from '@/api/get-notification-api';
import { deleteNotification } from '@/features/notifications/actions/delete-notification';
import { RootState } from '@/store/store';

export const getNotification = createAsyncThunk(
  'NOTIFICATION/GET',
  async (_, { dispatch, rejectWithValue, getState }) => {
    const { credentials } = getState() as RootState;
    try {
      const { data } = await TextNotification.getNotification(credentials);
      if (data) dispatch(deleteNotification(data?.receiptId))
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
