import React from 'react'
import { ChatButton } from './ChatButton';
import ChatBot from './ChatBot';
import {useIsChattingPageContext} from '../pageContext/useIsChattingPageContext';

const StartPage = () => {
    const {pageContext} = useIsChattingPageContext();
    return (
        <div className="App flex justify-center h-[100vh] box-border bg-[#00416A]">
            <div className="justify-center content-center overflow-x-hidden overflow-y-hidden">
                {pageContext?.isChatting ? <ChatBot /> : <ChatButton />}
            </div>
        </div>
    )
}

export default StartPage