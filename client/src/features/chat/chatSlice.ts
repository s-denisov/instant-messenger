import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { MessageProps } from "./Message";

export interface ChatState {
  messages: MessageProps[];
}

const initialState: ChatState = {
  messages: [
    { messageText: "Hi", isFromUser: true },
    { messageText: "Hello", isFromUser: false },
    { messageText: "How r u", isFromUser: false },
    {
      messageText:
        "This is looooooooooooooooooooooooooooooooooooooooooong message",
      isFromUser: false,
    },
    { messageText: "Nice one", isFromUser: true },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    newMessage: (state, action: PayloadAction<{ message: MessageProps }>) => {
      state.messages.push(action.payload.message);
    },
  },
});

export const totalMessages = (state: RootState) => state.chat.messages.length;
export const getMessage = (i: number) => (state: RootState) =>
  state.chat.messages[i];

export const { newMessage } = chatSlice.actions;

export default chatSlice.reducer;
