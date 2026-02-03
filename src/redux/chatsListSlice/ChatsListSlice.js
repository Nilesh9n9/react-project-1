import { createSlice } from '@reduxjs/toolkit';
import { errorResponse, receiveResponse, sendMessage, setIsLoading } from './ChatsListActions';

const initialChatsList = {
    chats : JSON.parse(localStorage.getItem('chats')) ||  [],
    selectedId: JSON.parse(localStorage.getItem('selectedId')) || undefined,  
};

const ChatsListSlice = createSlice({
    name: 'ChatsListSlice',
    initialState: initialChatsList,
    reducers: {
        startChat : (state, action) => {
            state.chats = [action.payload]
        },
        addChat : (state, action) => {
            state.chats = [action.payload, ...state.chats]
        },
        removeChat: (state, action) => {
            state.chats = state.chats.filter(chat => chat.id !== action.payload);
        },
        selectChat: (state, action) => {
            state.selectedId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(sendMessage, (state, action) => {
            const chat = state.chats.find(chat => chat.id === action.payload.id);
            if (chat) {
                chat.messages = [...chat.messages, action.payload.message];
                chat.isLoading = true;
            }
        }).addCase(receiveResponse, (state, action) => {
            const chat = state.chats.find(chat => chat.id === action.payload.id);
            if (chat) {
                chat.messages = [...chat.messages, action.payload.message];
                chat.isLoading = false;
            }
        }).addCase(errorResponse, (state, action) => {
            const chat = state.chats.find(chat => chat.id === action.payload.id);
            if (chat) {
                chat.messages = [...chat.messages, action.payload.message]
                chat.isLoading = false;
            }
        }).addCase(setIsLoading, (state, action) => {
            const chat = state.chats.find(chat => chat.id === action.payload.id);
            if (chat) {
                chat.isLoading = action.payload
            }
        })
    }
});

export const {startChat, addChat, removeChat, selectChat} = ChatsListSlice.actions;
export default ChatsListSlice.reducer;