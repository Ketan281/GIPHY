import React, {useState} from 'react';
import './NewMessageForm.css'
import { connect } from 'react-redux';
import { createMessage } from './actions';
const NewwMessageForm = ({messages , onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return(
        <div className='new-message-form'>
            <input type="text" 
            className="new-message-input"
            value={inputValue}
            placeholder =" type your Message !!!"
            onChange = { e => setInputValue(e.target.value)}
            />
            <button 
            onClick ={ ()=>{
                //check for duplicate text
                const isDuplicateText =
                    messages.some(message => message.text === inputValue);
                if (!isDuplicateText){
                    onCreatePressed(inputValue);
                    setInputValue("")
                }
                
            }}
            
            className="new-message-button">
                Send
                
            </button>
        </div>
    );
 }

 //is a object that is full state
 //is to take state and return a another object
 const mapStateToProps = state =>({
     messages :state.messages,
 });

 //is a function that allows trigger actions redux store respose too!
 const mapDispatchToProps = dispatch =>({
    onCreatePressed : text => dispatch(createMessage(text))
 });

 //exporting connected component
export default connect(mapStateToProps,mapDispatchToProps) (NewwMessageForm);