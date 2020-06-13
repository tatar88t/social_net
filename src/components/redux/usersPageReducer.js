
const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET_USERS',
      SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
      SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1
    
}

const usersPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return{...user, followed: true}
                    }
                    return user;
                })
            }
          
        case UNFOLLOW: 
                return {
                    ...state, 
                    users: state.users.map(user => {
                        if(user.id === action.userId) {
                            return{...user, followed: false}
                        }
                        return user;
                    })
                }
        case SET_USERS:
            return {
                ...state, users: action.users
            } 
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            } 
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totaUsersCount
            }  
        default:
            return state;
    }

}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totaUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totaUsersCount})
export default usersPageReducer;