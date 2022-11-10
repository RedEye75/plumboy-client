import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-plumboy`;
  }, [title]);
};
export default useSetTitle;
