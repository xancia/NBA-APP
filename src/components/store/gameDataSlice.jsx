import { createSlice } from "@reduxjs/toolkit";


const gameDataSlice = createSlice({
    name: 'gameData',
    initialState: null,
    reducers: {
       setGameData: (state,action) => {
        state = action.payload
        return state
       }
    }
})

export const { setGameData } = gameDataSlice.actions

export default gameDataSlice.reducer