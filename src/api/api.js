import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "2d90cddc-1060-4be7-ba66-f0e7702382eb"
    }
});
const YT_API_KEY = 'AIzaSyBQEJu8O4wI92VPf9JBUqK9xY_Nn1J9xtc';
const YTinstance = axios.create({
    timeout: 3000,
    baseURL: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBQEJu8O4wI92VPf9JBUqK9xY_Nn1J9xtc&q=`

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                   return response.data
                })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }

}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    },
    uploadProfilePhoto(file) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`profile/photo`, formData, {headers: {
            'Content-Type': 'multipart/form-data'
            }})
    },
    uploadProfileInfo(profileData) {

        return instance.put(`profile`, profileData)
    }
}
export const authAPI = {
    setAuthUser() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe= false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete('auth/login')
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}
export const youTubeAPI = {
    searchByQuery(inpValue) {
        return YTinstance.get(`${inpValue}&maxResults=10`)
    }
}
