import React from 'react';
import MessageListItem from './MessageListItem';
import './MessageList.css'
import NewMessageForm from './NewMessageForm';
import { connect } from 'react-redux';
import { removeMessage} from './actions';

const MessageList = ({ messages =[ ] , onRemovePressed}) => (

    <div className= "list-wrapper">
        <NewMessageForm/>
        {messages.map(message => <MessageListItem message={message} 
        onRemovePressed ={onRemovePressed}
        
        />)}
    </div>

);

const mapStateToProps = state => ({
    messages : state.messages
});

const mapDispatchToProps =dispatch =>({
    onRemovePressed: text => dispatch(removeMessage(text))
    
});

export default connect(mapStateToProps , mapDispatchToProps)(MessageList);