import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { ChangeTitleAction } from "./actions";

export function useTitle() {
  const title = useSelector((store: RootState) => store.title)
  const dispatch = useDispatch()

  function changeTitle(text: string) {
    dispatch(ChangeTitleAction(text))
  }

  return {
    title,
    changeTitle
  }
}