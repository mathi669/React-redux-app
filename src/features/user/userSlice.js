import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState:{
        logged: false,
        name:""
    },
    reducers:{
        login(state, action){
            state.logged = true
            state.name = action.payload
        },
        logout(state, action){
            state.logged = false
            state.name = ""
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer