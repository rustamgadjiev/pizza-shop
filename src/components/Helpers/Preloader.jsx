import { Skeleton } from "./Skeleton";

export const Preloader = ({ isLoading, children }) => {
  return isLoading
    ? [...new Array(4)].map((_, pos) => <Skeleton key={pos} />)
    : children;
};
