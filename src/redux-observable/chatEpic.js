import { ofType } from "redux-observable"
import { addChat, removeChat, selectChat, startChat } from "../redux/chatsListSlice/ChatsListSlice"
import { EMPTY, filter, ignoreElements, map, mergeMap, of, tap } from "rxjs";
import { errorResponse, initializeChat, receiveResponse, sendMessage } from "../redux/chatsListSlice/ChatsListActions";

export const removeChatEpic = (action$, state$) => {
    return action$.pipe(
        ofType(removeChat.type),
        filter((action) => {
            const id = action.payload;
            const selectedId = state$.value.chatsList.selectedId;
            const chats = state$.value.chatsList.chats;
            return id === selectedId && chats.length > 0;
        }),
        map(() => {
            const chats = state$.value.chatsList.chats;
            return selectChat(chats[0]?.id);
        })
    );
}

export const initialiseChatEpic = (action$, state$) => {
    return action$.pipe(
      ofType(initializeChat.type),
      filter(() => {
        const chats = state$.value.chatsList.chats;
        return chats.length === 0;
      }),
      mergeMap((action) => {
        const payload = action.payload;
        return of(
          startChat(payload),
          selectChat(payload.id)
        );
      })
    );
  };

export const persistLocalStorageEpic = (action$, state$) => {
  return action$.pipe(
    ofType(addChat.type, startChat.type, removeChat.type, selectChat.type, sendMessage.type, receiveResponse.type, errorResponse.type),
    tap(() => {
      const chats = state$.value.chatsList.chats;
      const selectedId = state$.value.chatsList.selectedId;
      const loadingChats = state$.value.chatsList.chats.filter(chat => chat.isLoading === true);
      localStorage.setItem('chats', JSON.stringify(chats));
      localStorage.setItem('selectedId', JSON.stringify(selectedId));
      localStorage.setItem('loadingChats', JSON.stringify(loadingChats));
    }),
    ignoreElements(),
  )
}