import { useRef } from 'react';

// Utility hook that returns a cached version of `value` that is updated only when `value` has changed according to `comparer.
// i.e. whenever `value` changes, `comparer` is executed with the cached value and the new value as parameters;
// if it returns false, the cache is updated with the new value.
export default function useMemoDistinct<T>(value: T, comparer: (a: T, b: T) => boolean): T {
  const cache = useRef(value);
  const valueChanged = !comparer(cache.current, value);

  if (valueChanged) {
    cache.current = value;
  }

  return cache.current;
}
