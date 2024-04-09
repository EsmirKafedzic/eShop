import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        logged: false
    },
    reducers: {
            //logg user
        loggedUser: (state, action) => {
            state.logged = true;
            state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("userToken", JSON.stringify(action.payload.token));
        }
        //loggout user
        }
})

export const { loggedUser } = userSlice.actions;
export default userSlice.reducer;