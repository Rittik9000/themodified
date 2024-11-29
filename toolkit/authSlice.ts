import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  {Cookies} from 'react-cookie'; 


interface StateData {
    isLoggedIn: boolean;
    userImage: string;
}

const initialState: StateData = {
    isLoggedIn: false,
    userImage: '',
};
const cookies = new Cookies();
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            cookies.remove("token");
            cookies.remove("userId");
            state.isLoggedIn = false;
            state.userImage = ''; 
        },
        login: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true;
            state.userImage = action.payload;
        }
    },
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
