/**
 * Hook for storing a user's input value as a useState
 * @returns [value, handler, setValue] - The input value, change handler, and setter function
 */
// Referenced from: https://qnrjs42.blog/react/typescript-useinput-hooks
import { useState, useCallback, ChangeEvent } from "react";

type OnChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

const useInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as [string, OnChangeType, typeof setValue];
};

export default useInput;
