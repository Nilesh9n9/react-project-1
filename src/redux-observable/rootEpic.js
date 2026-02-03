import {combineEpics} from 'redux-observable';
import { initialiseChatEpic, persistLocalStorageEpic, removeChatEpic } from './chatEpic';
import { responseEpic } from './responseEpic';


export const rootEpic = combineEpics(
    removeChatEpic,
    initialiseChatEpic,
    responseEpic,
    persistLocalStorageEpic,
)