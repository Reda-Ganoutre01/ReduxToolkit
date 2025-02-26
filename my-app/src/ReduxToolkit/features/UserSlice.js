import { createSlice } from "@reduxjs/toolkit";

const user = {
    name: 'Reda Ganoutre',
    country: 'ma',
    age: 20,
}

const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {

        resetUser: (state) => {
            state.age=undefined
            state.country=undefined
            state.name=undefined
        },
        updateUser: (state,actions) => {
            const {name,country,age}=actions.payload
            state.name=name
            state.country=country
            state.age=age

        },

    }
})

export const { resetUser, updateUser } = userSlice.actions
export default userSlice.reducer