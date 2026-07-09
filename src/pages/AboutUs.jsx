import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleHeaderTheme } from "../features/theme/themeSlice";

export default function AboutUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleHeaderTheme(true));
  }, [dispatch]);

  return <main></main>;
}
