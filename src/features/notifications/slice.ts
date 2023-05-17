import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationsState } from '@/features/notifications/types';
import { Notification, ResponseError } from '@/api/types';
import { getNotification } from '@/features/notifications/actions/get-notification';

const initialState: NotificationsState = {
  data: [],
  isLoading: false,
  error: undefined
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    [getNotification.pending.type]: (state: NotificationsState) => {
      state.isLoading = true,
      state.error = undefined
    },
    [getNotification.fulfilled.type]: (state: NotificationsState, action: PayloadAction<Notification>) => {
      state.isLoading = false,
      state.data.push(action.payload)
    },
    [getNotification.rejected.type]: (state: NotificationsState, action: PayloadAction<ResponseError>) => {
      state.isLoading = false,
      state.error = action.payload
    }
  },
});

export const notificationsActions = slice.actions;
export const notificationsReducer = slice.reducer;
