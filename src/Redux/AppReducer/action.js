import { LOGIN,REGISTER } from './actionType';

export const Actions={
    logIn:(user)=>({type:LOGIN,payload:{user}}),
    register:(user)=>({type:REGISTER,payload:{user}}),
}
