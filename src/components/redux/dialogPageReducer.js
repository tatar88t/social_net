const SEND_MESSAGE = 'SEND-MESSAGE',
      UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    contacts: [
        {name: 'Ariana', id: 1, profileAvatarPath: "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg"},
        {name: 'Amina', id: 2, profileAvatarPath: "https://cdn.pixabay.com/photo/2016/04/17/16/10/cat-1334970_960_720.jpg"},
        {name: 'Arina', id: 3, profileAvatarPath: "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg"},
        {name: 'Alisa', id: 4, profileAvatarPath: "https://cdn.pixabay.com/photo/2016/12/19/21/36/winters-1919143_960_720.jpg"}
    ],
    messages: [
        {message: 'How Are you?', id: "01"},
        {message: 'Fine, And you?', id: "02"},
        {message: 'I\'m OK as well', id: "03"},
        {message: 'Do you want to go for a walk tonight', id: "04"},
        {message: 'Sure, meet me in the park at 6', id: "05"}
    ],
    newMessageText: '',
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: 8,
                message: state.newMessageText   
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
        
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageText = action.newMessageBody;
            return state

        default:
            return state
    }    
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const onMessageBodyChangeCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text})
export default dialogPageReducer;