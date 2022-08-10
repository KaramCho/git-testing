import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders() {
  // 데이터를 Get하기
  const { orders } = useContext(AppStateContext);

  return orders;
}
