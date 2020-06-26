import {usersAPI} from "../../api/api";

const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      SET_PROFILE = 'SET_PROFILE';

let initialState = {
    posts: [
        {post: 'On a branch floating downriver a cricket, singing.', id: 1, likes: 7},
        {post: 'fallen leaves the abbot sweeps around them ', id: 2, likes: 3},
        {post: 'The calm, Cool face of the river Asked me for a kiss. ', id: 3, likes: 17},
        {post: 'People burn cars out there. My father took us out there when I was 11 and we burned GranGran’s car, him shaking the lighter fluid over the hood and up against the sides like he was seasoning it, then he let me and Lily toss the lighter through the passenger window but we had to promise to run as soon as it left our hands. Less you want me to roll you in hot sauce and eat you like a crispy wing, you’ll run your little asses fast as you can. We kept our promise and felt the fire at our backs but didn’t get to see it start, when we turned around it was going like it’d been alive forever.', id: 4, likes: 77}
    ],
    profileImg: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/model-1439909_960_720.jpg',
    newPostText: '',
    profile: null
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [...state.posts, {id: 5,
                                         post: state.newPostText,
                                         likes: 0}
                        ],
                newPostText: ''    
            }

            
        
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state, newPostText: action.newText
            }
        case SET_PROFILE:
            return {
                ...state, profile: action.profile
            }  
             
        default:
            return state
    }
}

export const addNewPostActionCreator = () => ({type: ADD_POST})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profilePageReducer;

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data));
            })
    }


}