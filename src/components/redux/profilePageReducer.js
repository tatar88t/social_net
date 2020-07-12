import {profileAPI, usersAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST',
      SET_PROFILE = 'SET_PROFILE',
      DELETE_POST = 'DELETE_POST',
      UPLOAD_PHOTO = 'UPLOAD_PHOTO',
        ADD_LIKE = 'ADD_LIKE',
    ADD_MARK = 'ADD_MARK',
      SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {post: 'On a branch floating downriver a cricket, singing.', id: 1, likes: 7, liked: false, marked: false},
        {post: 'fallen leaves the abbot sweeps around them ', id: 2, likes: 3, liked: false, marked: false},
        {post: 'The calm, Cool face of the river Asked me for a kiss. ', id: 3, likes: 17, liked: false, marked: false},
        {post: 'People burn cars out there. My father took us out there when I was 11 and we burned GranGran’s car, him shaking the lighter fluid over the hood and up against the sides like he was seasoning it, then he let me and Lily toss the lighter through the passenger window but we had to promise to run as soon as it left our hands. Less you want me to roll you in hot sauce and eat you like a crispy wing, you’ll run your little asses fast as you can. We kept our promise and felt the fire at our backs but didn’t get to see it start, when we turned around it was going like it’d been alive forever.', id: 4, likes: 77, liked: false, marked: false}
    ],
    // profileImg: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/model-1439909_960_720.jpg',
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [...state.posts, {id: 5,
                                         post: action.newPostText,
                                         likes: 0}
                        ]
            }
        case SET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id)
            }
        case UPLOAD_PHOTO:
            return {
                ...state, profile: {...state.profile, photos: action.photos}

            }
        case ADD_LIKE:

            return {
                ...state,
                posts:
                    [...state.posts.map(p => p.id == action.id ?  (!p.liked ? {likes: p.likes+1, post: p.post, id: p.id, liked: !p.liked, marked: p.marked} :
                        {likes: p.likes-1, post: p.post, id: p.id, liked: !p.liked, marked: p.marked}) :
                    {likes: p.likes, post: p.post, id: p.id, liked: p.liked, marked: p.marked})]
            }
        case ADD_MARK:

            return {
                ...state,
                posts:
                    [...state.posts.map(p => p.id == action.id ?  {likes: p.likes, post: p.post, id: p.id, liked: p.liked, marked: !p.marked} :
                        {likes: p.likes, post: p.post, id: p.id, liked: p.liked, marked: p.marked})]

            }
        // case SAVE_PROFILE_INFO:
        //     return {
        //         ...state, profile: {...state.profile, lookingForAJob: action.lookingForAJob,
        //             lookingForAJobDescription: action.lookingForAJobDescription,
        //             fullName: action.fullName}
        //
        //     }

        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const uploadPhoto = (photos) => ({type: UPLOAD_PHOTO, photos})
export const addLike = (id) => ({type: ADD_LIKE, id})
export const addMark = (id) => ({type: ADD_MARK, id})
// export const saveProfileInfoSuccess = (profileData) => ({type: SAVE_PROFILE_INFO, profileData})
export default profilePageReducer;

export const getUserProfile = (userId) => {
    return async(dispatch) => {
       const response =  await usersAPI.getProfile(userId)
                dispatch(setProfile(response.data));
    }
}

export const getStatus = (userId) => {
    return async(dispatch) => {
        const response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status, isOwner) => {
    return async(dispatch) => {
        const response = await profileAPI.updateStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
    }
}
export const savePhoto = (inputFile) => {
    return async (dispatch) => {
        const response = await profileAPI.uploadProfilePhoto(inputFile)
        if (response.data.resultCode === 0) {
            dispatch(uploadPhoto(response.data.data.photos))
        }

    }
}
export const saveProfileInfo = (inputData) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const response = await profileAPI.uploadProfileInfo(inputData)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else {
            dispatch(stopSubmit('editProfile',  {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }

    }
}