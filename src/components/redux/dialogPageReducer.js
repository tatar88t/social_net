const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ]
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText
            return {
            ...state,
            messages: [...state.messages, {id: 8, message: body}]
            }
        default:
            return state
    }    
}
export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})
export default dialogPageReducer;