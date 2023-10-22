import { useSelector } from "react-redux";
import {actions} from "../redux/reducers/counterReducer";

export const Count = () => {
  // change as per the store implementation
  const { count } = useSelector((state) => state.counterReducer);

  return <b>{count}</b>;
};
