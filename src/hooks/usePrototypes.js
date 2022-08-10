import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  // 데이터를 Get하기
  const { prototypes } = useContext(AppStateContext);
  // value 전체이기 때문에 object 안에 들어있는 prototypes만 꺼내오면 됨
  // 객체가 value가 됨

  return prototypes;
}
