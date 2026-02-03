import React from "react";
import { useIsChattingPageContext } from "../pageContext/useIsChattingPageContext";


export const ChatButton = () => {
    const {openChatPage} = useIsChattingPageContext();
    return (
        <button onClick={openChatPage}
        className='text-[4vw] font-bold bg-[linear-gradient(45deg,_#34d399,_#3b82f6)] rounded-lg p-4 text-white sm:px-6 sm:py-4 sm:text-[2vw]'>
            Chat AI
        </button>
    );
}

