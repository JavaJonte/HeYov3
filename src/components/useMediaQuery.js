import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  // Skapar en hook MediaQuery
  const [matches, setMatches] = useState(false); // Skapar useState (matches) som är boolean

  useEffect(() => {
    // React hook. Kallas på när React cycle re-renders
    const media = window.matchMedia(query); // Sätter media query. (@media screen and (max-width: 600px)
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      // Lyssnar på resize
      setMatches(media.matches);
    };
    media.addEventListener("change", listener); // lägg till lyssnaren
    return () => media.removeEventListener("change", listener); // Rensar upp lyssnar så den inte ligger kvar när man navigerat ifrån sidan
  }, [matches, query]);

  return matches;
}
