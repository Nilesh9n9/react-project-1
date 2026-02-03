import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addChat } from '../../redux/chatsListSlice/ChatsListSlice'
import { createNewChatPayload } from '../utils/utils'

const ChatListHeader = () => {
    const dispatch = useDispatch();

    const addNewChatHandler = () => {
        const newChat =createNewChatPayload();
        dispatch(addChat(newChat));
    }
    return (
        <div className="chat-list-header min-h-[70px] h-[10vh] max-h-[100px] flex items-center ml-[20px] mr-[10px] justify-between">
            <h2 className='sm:text-[1.25rem] sm:font-bold'>CHAT LIST</h2>
            <FontAwesomeIcon icon={faEdit} className=' text-blue-500 cursor-pointer' onClick={addNewChatHandler}/>
        </div>
    )
}

export default ChatListHeader