import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  // 데이터를 Get하기
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);
  // 상태를 주는 것이 아니라, 함수를 주는 것
  // 상태를 변경하는 함수를 받아서 보내주는 역할을 하는 Hooks

  return { addToOrder, remove, removeAll };
}
