import React, { useEffect } from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector, selectedChatIdSelector } from '../../redux/chatsListSlice/ChatsListSelectors';
import { removeChat, selectChat } from '../../redux/chatsListSlice/ChatsListSlice';
import { createFirstChatPayload } from '../utils/utils';
import { initializeChat } from '../../redux/chatsListSlice/ChatsListActions';

const selectedClassName = 'chat-list-item p-4 bg-[linear-gradient(135deg,#6A5ACD,#DC143C)] w-full text-left rounded-md flex justify-between items-baseline';
const unSelectedClassName = 'chat-list-item p-4 bg-[linear-gradient(45deg,_#34d399,_#3b82f6)] w-full text-left rounded-md flex justify-between items-baseline';

const ChatList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(chatsSelector);
    const selectedId = useSelector(selectedChatIdSelector);

    const removeClickHandler = (e, id) => {
        e.stopPropagation();
        dispatch(removeChat(id));
    }

    const handleChatSelect = (id) => {
        dispatch(selectChat(id));
    }

    useEffect(() => {
        if (chats.length === 0) {
            const newChat = createFirstChatPayload();
            dispatch(initializeChat(newChat));  
        }
    }, [dispatch, chats.length])

    return (
        <>
            {chats.length !== 0 && (
                <div className="chat-items self-stretch h-[95vh] flex flex-col items-start gap-1 text-[0.5rem] sm:text-[1rem]">
                    {chats.map((chat) => (
                        <div key={chat.id} onClick={() => handleChatSelect(chat.id)} className={chat.id === selectedId ? selectedClassName : unSelectedClassName}>
                            <h4 className='w-full cursor-pointer'>Chat {chat.id}</h4>
                            <FontAwesomeIcon
                                icon={faClose}
                                className= {`self-center cursor-pointer ${chat.id === selectedId ? 'text-blue-800 ' : 'text-white'}`}
                                onClick={(e) => removeClickHandler(e, chat.id)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>

    )
}

export default ChatList