//action and action creator for create todo
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const createMessage = text => ({
    type : CREATE_MESSAGE,
    payload : {text},
});


//action and action creator for Remove todo
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const removeMessage = text => ({
    type : REMOVE_MESSAGE,
    payload :{text},

});
