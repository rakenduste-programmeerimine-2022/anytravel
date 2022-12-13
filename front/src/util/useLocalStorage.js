import { useEffect, useState } from "react";

function useLocalState(defVal, key) {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue !== null ? localStorageValue : defVal;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}

export { useLocalState };
