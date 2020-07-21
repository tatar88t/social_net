import {youTubeAPI} from "../../api/api";


export const searchVideos = (inputValue) => async(dispatch) => {
    const response = await youTubeAPI.searchByQuery(inputValue)
    console.log(response)
}