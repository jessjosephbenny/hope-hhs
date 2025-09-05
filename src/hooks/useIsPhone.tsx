import { useEffect, useState } from "react";

export function useIsPhone(breakpoint: number = 768) {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    // Function to check width
    const checkWidth = () => {
      setIsPhone(window.innerWidth < breakpoint);
    };

    checkWidth(); // Run on mount
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isPhone;
}
