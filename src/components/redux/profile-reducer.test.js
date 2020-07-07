import profilePageReducer, {addPost, deletePost} from "./profilePageReducer";
import ReactDom from 'react-dom'
import React from 'react'

let state = {
    posts: [
        {post: 'On a branch floating downriver a cricket, singing.', id: 1, likes: 7},
        {post: 'fallen leaves the abbot sweeps around them ', id: 2, likes: 3},
        {post: 'The calm, Cool face of the river Asked me for a kiss. ', id: 3, likes: 17},
        {post: 'People burn cars out there. My father took us out there when I was 11 and we burned GranGran’s car, him shaking the lighter fluid over the hood and up against the sides like he was seasoning it, then he let me and Lily toss the lighter through the passenger window but we had to promise to run as soon as it left our hands. Less you want me to roll you in hot sauce and eat you like a crispy wing, you’ll run your little asses fast as you can. We kept our promise and felt the fire at our backs but didn’t get to see it start, when we turned around it was going like it’d been alive forever.', id: 4, likes: 77}
    ]

}

it('post length should be incremented', () => {
    //1. initial test- data
    let action = addPost('TEST-TEXT')

    //2. action
    let newState = profilePageReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(5);

})

it('added post-message should be correct', () => {
    //1. initial test- data
    let action = addPost('TEST-TEXT')

    //2. action
    let newState = profilePageReducer(state, action)

    //3.expectation
    expect(newState.posts[4].post).toBe('TEST-TEXT');
})

it('posts length should be decremented after post- Delete', () => {
    //1. initial test- data
    let action = deletePost(1)

    //2. action
    let newState = profilePageReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(3);
})