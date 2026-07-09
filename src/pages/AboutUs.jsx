import { useEffect } from "react";

export default function AboutUs({ setIsHeaderTransparent }) {
  useEffect(() => {
    setIsHeaderTransparent(true);
  }, [setIsHeaderTransparent]);

  return <main></main>;
}
