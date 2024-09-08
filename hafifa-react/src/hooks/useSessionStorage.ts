import { useEffect, useState } from 'react';

export const useSessionStorage = (key: string, initialValue: any, interval = 2000) => {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    const saveInterval = setInterval(() => sessionStorage.setItem(key, JSON.stringify(value)), interval);

    return () => clearInterval(saveInterval);
  });

  return [value, setValue];
};
