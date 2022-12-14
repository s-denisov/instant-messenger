import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import chatReducer from "../features/chat/chatSlice";
import contactsReducer from "../features/contacts/contactsSlice";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/login/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
    contacts: contactsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
