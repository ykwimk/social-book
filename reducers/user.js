export const initialState = {
  isLogin: false,
  meData: null,
  signUpData: {},
  loginData: {},
}

export const loginAction = (data) => {
  return {
    type: 'LOGIN',
    data
  }
}

export const logoutAction = () => {
  return {
    type: 'LOGOUT',
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        meData: action.data,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        meData: null,
      }
    default:
      return state
  }
}

export default reducer;