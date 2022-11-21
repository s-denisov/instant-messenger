import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Contact {
  id: string;
  name: string;
}

const initialContacts: Contact[] = [{ id: '12345', name: 'A' }];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { currentContacts: initialContacts },
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.currentContacts.push(action.payload);
      },
      prepare: (name) => ({
        payload: {
          id: nanoid(),
          name,
        },
      }),
    },
  },
});

export const totalContacts = (state: RootState) => state.contacts.currentContacts.length;
export const getContact = (i: number) => (state: RootState) => state.contacts.currentContacts[i];

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
