import { useCallback, useRef } from 'react';

// Utility hook that takes a callback function as an input, and returns a cacheable proxy to it.
// i.e. even if the callback function changes, the returned proxy never changes, but it still
// forwards calls to the latest callback function.
// Useful to avoid needless re-renders when you don't care about the callback function's identity
// and just want to another hook to be able to call it.
export default function useCallbackProxy<F extends (...args: any[]) => any>(
  callback?: F
) {
  const latestCallback = useRef(callback);
  latestCallback.current = callback;
  return useCallback(
    (...args: Parameters<F>) => latestCallback.current?.(...args),
    [latestCallback]
  );
}
