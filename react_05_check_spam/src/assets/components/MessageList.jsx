import React from 'react';
import Message from './Message';

function MessageList({ messages }) {

    return (
        <div className="mb-3 form-control" id="chatBox">
            {
                messages.map((message) =>
                    <Message {...message} key={message.id}></Message>)
            }
        </div >
    );
}

export default MessageList;