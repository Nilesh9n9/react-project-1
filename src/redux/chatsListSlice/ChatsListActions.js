import { createAction } from "@reduxjs/toolkit";

export const initializeChat = createAction('ChatsListSlice/INITIALIZE_CHAT');
export const sendMessage = createAction('ChatsListSlice/SEND_MESSAGE');
export const receiveResponse = createAction('ChatsListSlice/RECEIVE_RESPONSE');
export const errorResponse = createAction('ChatsListSlice/ERROR_RESPONSE');
export const setIsLoading = createAction('ChatsListSlice/SET_LOADING');

