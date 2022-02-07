const userLogin = 'USER_LOGIN'
const userLogout = 'USER_LOGOUT'

export const USER_LOGIN = (email, password) => ({
  type: userLogin,
  payload: {
    email,
    password
  }
})

export const USER_LOGOUT = () => ({
  type: userLogout
})

export default (state = {}, action) => {
  switch (action.type) {
    case userLogin:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...action.payload }

    case userLogout:
      localStorage.removeItem('user')
      return {}

    default:
      return state
  }
}
