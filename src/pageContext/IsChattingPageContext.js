import { createContext } from 'react';

const initialContextValue = {
    isChatting : false,
    openHomePage : () => {},
    openChatPage: () => {},
}

const IsChattingPageContext = createContext(initialContextValue);

export default IsChattingPageContext;