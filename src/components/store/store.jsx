import { configureStore } from "@reduxjs/toolkit";
import teamDataReducer from "./teamDataSlice";
import gameDataReducer from "./gameDataSlice";

export const store = configureStore({
    reducer: {
        teamData: teamDataReducer,
        gameData: gameDataReducer,
    }
})