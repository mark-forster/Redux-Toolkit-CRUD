 import { createSlice, nanoid} from '@reduxjs/toolkit'

 const initialState = {
    users:[{id:1, name: 'John', email: 'john@example.com'}, {id:2, name: 'mark',email: 'mark@gmail.com'}]
 }

 export const userSlice= createSlice({
        name: 'user',
        initialState,
        reducers: {
         addUser: (state, action)=>{
            state.users.push(action.payload)
         },
         updateUser: (state, action)=>{
            const { id, name, email } = action.payload;
            const updateUser = state.users.find(user=> user.id == id);
            if(updateUser) {
               updateUser.name = name;
               updateUser.email = email;
            }
         },
         removeUser: (state, action)=>{
            state.users= state.users.filter((user)=>
                user.id !== action.payload);
         }
        },
 });

 export const { addUser, updateUser, removeUser} = userSlice.actions;

export default userSlice.reducer;