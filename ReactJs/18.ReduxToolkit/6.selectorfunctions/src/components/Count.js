import { useSelector } from "react-redux";

export const Count = () => {
  // refactor to use the selector function
  const { count } = useSelector((state) => state.counterReducer);

  return <b>{count}</b>;
};
