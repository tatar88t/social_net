import React, {Component, useState} from 'react';
import ReactPlayer from 'react-player';
import stl from './video.module.css'
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {reduxForm} from "redux-form";
import {youTubeAPI} from "../../api/api";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";


const Video = (props) => {
    const [videos, setvideosId] = useState([])
    const youTubeAPI_KEY = 'AIzaSyBQEJu8O4wI92VPf9JBUqK9xY_Nn1J9xtc'
    const searchVideos =  async(formData) => {
            const response = await youTubeAPI.searchByQuery(formData.search)
            const result = response.data.items.map(item => item.id.videoId)
            console.log(response)
            console.log(videos)
        setvideosId(result)

        //[0].id.videoId

        }




    return (
        <div >
            <div className={stl.fixedVideosWrapper}>
                <div className={stl.videoItem}>
                    <h3> React-Player</h3>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ik_56ifdnoU' controls={true} className={stl.videoItem}
                                 width="100%" height='215px'/>
                </div>

                <div className={stl.videoItem}>
                    <h3> iFrame</h3>
                    <iframe width="100%" height='215' src="https://www.youtube.com/embed/9Dr_64ckeKw" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>d
                    </iframe>
                </div>
            </div>
            <hr/>
            <div>
                <SearchVideoReduxForm onSubmit = {searchVideos}/>
                <SearchResult videos = {videos} />
            </div>
        </div>
    )
}
const SearchVideoForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            {createField('Enter your request...', 'search', Input, [], )}
            <div>
                <button type = 'submit'>SEARCH</button>
            </div>

        </form>
    )
}
const SearchResult = (props) => {
    console.log('FROM PROPS', props.videos);
    console.log(props.videos[0])


    return(
        <div className={stl.videoItem}>
            <h3> React-Player</h3>
            <div>
                {props.videos
                    .filter(videoItem => videoItem)
                    .map(videoItem => <ReactPlayer url ={`https://www.youtube.com/watch?v=${videoItem}`} controls={true}
                        className={stl.videoItem} key = {videoItem} width="50%" height='315px'/>

                )}
            </div>


        </div>
    )
}

const SearchVideoReduxForm = reduxForm ({

    form: 'videoSearch'
})(SearchVideoForm)
export default Video;