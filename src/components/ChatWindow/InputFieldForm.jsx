import React, { useState } from 'react'
import { faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector, selectedChatIdSelector } from '../../redux/chatsListSlice/ChatsListSelectors';
import { sendMessage } from '../../redux/chatsListSlice/ChatsListActions';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data'

const InputFieldForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [showEmojiPicker, setshowEmojiPicker] = useState(false);
    const selectedId = useSelector(selectedChatIdSelector);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue)return ;
        const newMessage = {isPrompt: true, id: new Date().toLocaleTimeString(), text: inputValue};
        
        dispatch(sendMessage({id: selectedId, message: newMessage}));
        setInputValue('');
        return;
    }

    const handleEmojiInput = (emoji) => {
        setInputValue(prev => prev + emoji.native);
    }

    return (
        <form className="msg-form border-t-2 border-black flex justify-between relative bg-slate-900 flex-1 max-h-[100px]" onSubmit={(e)=>handleSubmit(e)}>
            <FontAwesomeIcon icon={faSmile} className=' text-blue-500 self-center text-2xl ml-2 cursor-pointer' onClick={() => setshowEmojiPicker(prev=>!prev)} />
            {showEmojiPicker && 
                <div className='absolute bottom-[6rem]'>
                    <Picker data={data} onEmojiSelect={handleEmojiInput} />
                </div>
            }
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="msg-input outline-none border-none w-full mx-2 py-9 px-3 h-full bg-slate-900" placeholder='Type a Message ...' />
            <FontAwesomeIcon icon={faPaperPlane} onClick={(e)=>handleSubmit(e)} className=' text-blue-500 self-center text-2xl mr-2 cursor-pointer' />
        </form>
    )
}

export default InputFieldForm