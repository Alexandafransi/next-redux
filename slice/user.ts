import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "@/store";


export type User = {
    id: string,
    name: string,
    email: string,
}
interface InitialState{
    loading:boolean,
    error: string,
    user:User | null
}
const initialState: InitialState = {
    loading:false,
    error: '',
    user: null
}

const { reducer, actions } = createSlice({
    name: 'user',
    initialState:initialState,
    reducers: {
        requested: (state) => ({...state,loading:true}),
        succeed: (state,action:PayloadAction<User>) => ({...state,loading:false, user:action.payload}),
        failed: (state,action:PayloadAction<string>) => ({...state,loading:false, user:null,error:action.payload})
    }
})
export default reducer

export const addUser = (user:User)=>(dispatch:AppDispatch)=>{

    try {
        dispatch(actions.requested())
        dispatch(actions.succeed(user))
    }catch (e) {
        dispatch(actions.failed('user not found'))

    }

}