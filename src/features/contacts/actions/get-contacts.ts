import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contacts } from '@/api/contacts-api';

export const getContacts = createAsyncThunk(
  'CONTACTS/GET',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await Contacts.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
