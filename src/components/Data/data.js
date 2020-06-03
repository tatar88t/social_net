const state = {
    profilePage: 
        {posts: [
            {post: 'On a branch floating downriver a cricket, singing.', id: 1, likes: 7},
            {post: 'fallen leaves the abbot sweeps around them ', id: 2, likes: 3},
            {post: 'The calm, Cool face of the river Asked me for a kiss. ', id: 3, likes: 17},
            {post: 'People burn cars out there. My father took us out there when I was 11 and we burned GranGran’s car, him shaking the lighter fluid over the hood and up against the sides like he was seasoning it, then he let me and Lily toss the lighter through the passenger window but we had to promise to run as soon as it left our hands. Less you want me to roll you in hot sauce and eat you like a crispy wing, you’ll run your little asses fast as you can. We kept our promise and felt the fire at our backs but didn’t get to see it start, when we turned around it was going like it’d been alive forever.', id: 4, likes: 77}
        ],
        profileImg: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/model-1439909_960_720.jpg'
    },
    dialogPage:  
        {contacts: [
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
}

export default state