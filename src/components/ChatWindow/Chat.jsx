import React from 'react'
import { useSelector } from 'react-redux'
import { chatsSelector, isChatLoadingSelector, selectedChatIdSelector } from '../../redux/chatsListSlice/ChatsListSelectors'
import ReactMarkdown from 'react-markdown';

const Chat = () => {
    const chats = useSelector(chatsSelector);
    const selectedId = useSelector(selectedChatIdSelector);
    const isChatLoading = useSelector((state) => isChatLoadingSelector(state, selectedId));

    // const bottomRef = useRef(null);

    // useEffect(() => {
    //     bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    // }, [chats]);

    const selectedChat = chats ? chats.find(chat => chat.id === selectedId) : undefined;
    return (
        <div className="chat min-h-[200px] flex-1 max-h-[85vh] flex flex-col gap-2 p-1 overflow-y-auto">
            {selectedChat && selectedChat.messages.map((message, idx) => (
                message.isPrompt ? (
                    <div key={idx} className="prompt self-end p-2 bg-[linear-gradient(135deg,_#6A5ACD,_#DC143C)] rounded-s-2xl rounded-br-2xl flex flex-col max-w-[70%] text-[0.25rem]">
                        <p className='display-block text-left text-wrap prose text-white text-[0.5rem] sm:text-[1rem]'>
                            {message.text}
                        </p>
                        <span className='text-0.75rem self-end lg:text-[0.75rem]'>{message.id}</span>
                    </div>
                ) :
                    (
                        <div key={idx} className="response self-start p-2 bg-[linear-gradient(135deg,_#6A5ACD,_#DC143C)] rounded-r-2xl rounded-bl-2xl flex flex-col max-w-[70%] text-wrap">
                            <div className='display-block text-left text-wrap prose text-white'>
                                <ReactMarkdown>
                                    {message.text}
                                </ReactMarkdown>
                            </div>
                            <span className='text-0.75rem self-start lg:text-[0.75rem]'>{message.id}</span>
                        </div>
                    )
            ))}
            {
                isChatLoading && <div className="typing  self-start text-[0.75rem] sm:text-[1.25rem]">
                    Typing...
                </div>
            }

        </div>
    )
}

export default Chat