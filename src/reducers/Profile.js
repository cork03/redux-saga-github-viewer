import { FETCH_PROFILE_SUCCEEDED } from '../actions/Index'
const initialData = {
    name: 'jjoo',
    email: 'hoge@example.com',
    profileUrl:
      'https://avatars1.githubusercontent.com/u/25723193?s=60&u=5f2d871352830fdf1a79ee285e0712044105ca91&v=4'
}


const profile = (state = initialData, action) => {
  debugger
  switch (action.type) {
    case FETCH_PROFILE_SUCCEEDED:
      return { ...state, name: action.payload.name, email: '' }
    default:
      return state
  }
}

export default profile
