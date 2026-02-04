AI Chatbot

A React-based AI chatbot application that supports multi-session conversations with asynchronous AI responses and persistent state.


Designed with separation of concerns: UI components are stateless, side effects are handled entirely in epics.

Architecture allows easy extension to Notes

Designed with separation of concerns: UI components are stateless, side effects are handled entirely in epics.

Architecture allows easy extension to IndexedDB, WebSockets, or streaming responses..

Features

Start, persist, and resume conversations using localStorage hydration on app load.

Async message flows using redux-observable (RxJS epics) for side-effect orchestration, error handling, and cancellation.

Virtualized chat list and message window to handle long histories efficiently.

Context API for page-level UI state and a modular service layer for API interactions.

Test-ready project structure with Jest and React Testing Library.

Tech Stack

React (functional components, hooks)

Redux Toolkit (createSlice, reducers, extraReducers)

RxJS + redux-observable (Epics)

Context API

Tailwind CSS

localStorage

Jest + React Testing Library

Project Structure
src/
 ├── App.js                # App bootstrap with Context and Redux Provider
 ├── components/           # ChatList, ChatWindow, InputField, StartPage, ChatBot
 ├── redux/                # Store configuration and chat slice
 ├── redux-observable/     # Epics: chatEpic, responseEpic, rootEpic
 ├── service/              # sendMessage service and utilities
 ├── pageContext/          # Page-level UI context
 └── index.css             # Tailwind setup

Epics

initialiseChatEpic – creates initial chat on first load.

removeChatEpic – updates selected chat when deleting the active conversation.

responseEpic – handles async AI responses with retry and cancellation.

persistLocalStorageEpic – persists chats and selected conversation to localStorage on chat-related actions.

Run
npm install
npm start

