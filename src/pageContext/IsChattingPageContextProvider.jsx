import React, { useState } from 'react'
import IsChattingPageContext from './IsChattingPageContext';

export const IsChattingPageContextProvider = ({ children }) => {
    const [pageContext, setPageContext] = useState({
        isChatting : false,
    });

    const openChatPage = () => {
        setPageContext({isChatting : true});
    }       

    const openHomePage = () => {
        setPageContext({isChatting : false});
    }

    const value = {
        pageContext,
        openChatPage,
        openHomePage
    }

    return (
       <IsChattingPageContext.Provider value={value}>
        {children}
       </IsChattingPageContext.Provider>
    )
}

