import { ofType } from "redux-observable";
import { errorResponse, receiveResponse, sendMessage } from "../redux/chatsListSlice/ChatsListActions";
import { catchError, concatMap, delay, map, mergeMap, of, switchMap, tap } from "rxjs";
import { sendMessage$ } from "../service/sendMessage";

// switchMap for taking only latest input request => Cancels previous, only latest matters
// mergeMap => will take all responses but not in order, in order in what they get resolved => Fast, concurrent, unordered
// concatMap => Ordered, but sequential only

export const responseEpic = (action$) => {
    return action$.pipe(
        ofType(sendMessage.type),
        switchMap(action => {
            return sendMessage$(action?.payload?.message?.text).pipe(
                map((reply) => {
                    const message = { isPrompt: false, id: new Date().toLocaleTimeString(), text: reply }
                    return receiveResponse({id : action.payload.id, message: message});
                }),
                catchError(() => of(errorResponse(action.payload.id)))
            )
        })
    )   
}