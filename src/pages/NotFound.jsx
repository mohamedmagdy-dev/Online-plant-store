import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleHeaderTheme } from "../features/theme/themeSlice";

export default function NotFound() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleHeaderTheme(false));
  }, [dispatch]);

  return (
    <main className="py-35">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-abyss mb-10 ">404 - Page Not Found</h1>
        <p className="text-abyss text-2xl font-semibold">The page you are looking for does not exist.</p>
      </div>
    </main>
  );
}
