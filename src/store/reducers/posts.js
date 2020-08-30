import { ADD_POST, ADD_COMMENT } from '../actions/actionsTypes'

const initialState = {
    posts: [
        {
            id: Math.random(),
            name: 'Flemeg Balla',
            nickname: 'Balla',
            email: 'flemeg@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Xuxinha',
                comment: 'Ismal bebao'
            }]
        },
        {
            id: Math.random(),
            name: 'Daniel',
            nickname: 'Xuxinha',
            email: 'daniel.cdesouza@gmail.com',
            image: require('../../../assets/imgs/car2.jpg'),
            comments: [{
                nickname: 'Flemeg',
                comment: 'Me xama pra da uma volta'
            }]
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }
                    } else {
                        post.comments = [action.payload.comment]
                    }
                    return post
                })
            }
        default:
            return state
    }
}


export default reducer