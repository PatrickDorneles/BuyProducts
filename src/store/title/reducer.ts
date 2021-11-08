import { createReducer } from "@reduxjs/toolkit";
import { ChangeTitleAction } from "./actions";

export const TitleReducer = createReducer<string>('', (builder) => {
  builder.addCase(ChangeTitleAction, (state, action) => {
    return action.payload;
  })
})