
export const createPayload = (userInput) => {
    const payload = {
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: userInput,
          },
        ],
    };
    return payload;
}

export const url = 'https://openrouter.ai/api/v1/chat/completions';

export const options = (payload) => {
    return {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }

};