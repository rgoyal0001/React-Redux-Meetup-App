import * as types from "./actionType";
const initialState = {
  profile: {
    name: '',
    location: '',
    interest: '',
    password: '',
  }
};

const reducer = (state = initialState,action) => {
  switch(action.type){
    case types.LOGIN:
      console.log('login',action.payload.user)
      return {
        ...state,
        profile:action.payload.user
      }
    case types.REGISTER:
      console.log('register',action.payload.user)
      return {
        ...state,
        profile:action.payload.user
      }
    
      default:
        return state;
  }
};

export { reducer };