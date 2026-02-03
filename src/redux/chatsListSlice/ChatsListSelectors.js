export const chatsSelector = (state) => {
    return state.chatsList.chats
};

export const selectedChatIdSelector = (state) => {
    return state.chatsList.selectedId
};

export const isChatLoadingSelector = (state, id) => {
    const chat = state.chatsList.chats.find((chat) => chat.id === id);
    return chat?.isLoading ?? false;
};
