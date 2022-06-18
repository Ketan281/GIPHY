import { CREATE_MESSAGE,REMOVE_MESSAGE } from "./actions";


export const messages = (state = [] ,action) =>{

    const {type , payload} = action;
    
    switch (type){
        case CREATE_MESSAGE:{

            const {text} = payload;
            const newMessage ={
                text
            }
            //merging the state with new state (no mutation )
            return state.concat(newMessage)
        }

        case REMOVE_MESSAGE:{

            const {text} =payload;
            return state.filter(message => message.text !== text)


        }


        default:
            return state;
    }
    
     
}