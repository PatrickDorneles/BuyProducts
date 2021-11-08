import { createAction } from "@reduxjs/toolkit";

enum TitleActionTypes {
  CHANGE_TITLE = "@title/change_title"
}

export const ChangeTitleAction = createAction<string>(TitleActionTypes.CHANGE_TITLE)