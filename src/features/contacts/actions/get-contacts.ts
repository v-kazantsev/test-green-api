import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contacts } from '@/api/contacts-api';
import { RootState } from '@/store/store';

export const getContacts = createAsyncThunk(
  'CONTACTS/GET',
  async (_, { rejectWithValue, getState }) => {
    const { credentials } = getState() as RootState;
    try {
      const { data } = await Contacts.getContacts(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
