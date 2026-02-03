import React from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useIsChattingPageContext } from '../../pageContext/useIsChattingPageContext'

const ChatWindowHeader = () => {
    const {openHomePage} = useIsChattingPageContext();
    const handleClick = (e) => {
        if(e.details === 0)
            return;

        openHomePage();
    }
    return (
        <div className="chat-title h-[10vh] min-h-[70px] max-h-[100px] flex justify-between items-center bg-slate-900">
            <h3 className='text-[1.25rem] font-bold mx-[5px]'>Chat With AI</h3>
            {/* <i></i> */}
            <FontAwesomeIcon onClick={(e) => handleClick(e)} icon={faHome} className=' text-blue-500 self-center mr-[10px] text-2xl cursor-pointer' />
        </div>
    )
}

export default ChatWindowHeader;