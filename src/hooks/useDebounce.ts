import { useCallback, useRef } from "react";

export function useDebounce<
  T extends (...args: unknown[]) => Promise<any> | any,
>(callback: T, delay: number): T {
  const timerRef = useRef<Timer | null>(null);

  const debouncedCallback = useCallback(
    (...args: unknown[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(async () => {
        await callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback as T;
}
