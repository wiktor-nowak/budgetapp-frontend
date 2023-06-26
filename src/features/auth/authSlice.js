import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem("token"),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showToken: (state) => {
      console.log("POKAZUJE TOKEN Z REDUXA", state.token)
    },
    logout: (state) => {
      localStorage.removeItem("token")
      state.token = "";
    },
    login: (state,payload) => {
        localStorage.setItem("token",payload.token);
        state.token = localStorage.getItem("token");
    }
  },
})

// Action creators are generated for each case reducer function
export const { showToken,logout,login } = authSlice.actions

export default authSlice.reducer