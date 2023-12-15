import { createSlice } from "@reduxjs/toolkit";


const teamDataSlice = createSlice({
    name: 'teamData',
    initialState: null,
    reducers: {
        setTeamData: (state,action) => {
            state = action.payload
            return state
           }
    }
})

export const { setTeamData } = teamDataSlice.actions

export default teamDataSlice.reducer