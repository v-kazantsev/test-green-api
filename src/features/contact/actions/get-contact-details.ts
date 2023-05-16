import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactDetails } from '@/api/contact-details-api';

export const getContactDetails = createAsyncThunk(
  'CONTACT_DETAILS/GET',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await ContactDetails.getContactDetails(id);
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
