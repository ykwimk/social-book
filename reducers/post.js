export const initialState = {
  mainPosts: [
    {
      id: 0,
      user: {
        id: 0,
        nickname: 'ykwimk',
      },
      content: '첫번째 게시물',
      images: [
        { src: 'http://lorempixel.com/400/255/cats/' },
        { src: 'http://lorempixel.com/400/255/abstract/' },
        { src: 'http://lorempixel.com/400/255/city/' }
      ],
      comments: [
        {
          user: {
            nickname: 'zmzmzm'
          },
          content: '댓글입니다.'
        }
      ]
    }
  ],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST'

export const addPost = {
  type: ADD_POST
}

const dummyPost = {
  id: 2,
  content: '더미데이터 입니다.',
  user: {
    id: 1,
    nickname: 'dummy',
  },
  images: [],
  comments: [],
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [
          dummyPost,
          ...state.mainPosts,
        ],
        postAdded: true,
      }
    default:
      return state
  }
}

export default reducer;