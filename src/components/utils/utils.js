export const generateTimeStampId = () => {
    const now = new Date();

    const date = now.toLocaleDateString();
    const timeParts = now.toLocaleTimeString().split(' '); 
    const time = timeParts[0]; 
    const ampm = timeParts[1];
    const millis = now.getMilliseconds().toString().padStart(3, '0');

    const id = `${date}-${time}:${millis} ${ampm}`;
    return id;
}

export const createFirstChatPayload = () => {
    const firstChat = {
        id: generateTimeStampId(),
        messages: [{ isPrompt: false, id: new Date().toLocaleTimeString(), text: 'Hey Welcome, how can I help you today?' },],
    }

    return firstChat;
}

export const createNewChatPayload = () => {
    const newChat = {
        id: generateTimeStampId(),
        messages: [{ isPrompt: false, id: new Date().toLocaleTimeString(), text: 'How can I help you today?' },],
    }

    return newChat;
}