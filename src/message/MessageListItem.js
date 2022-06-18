import React from 'react';
import './MessageListItem.css'

const MessageListItem = ({message,onRemovePressed}) =>(

    <div className='message-item-container'>
        <h3>{message.text}</h3>

        <div className="button-container">
            <button 
                onClick={()=>onRemovePressed(message.text)}
                className = "remove-button">Delete Message</button>
        </div>
    </div>
);

export default MessageListItem;