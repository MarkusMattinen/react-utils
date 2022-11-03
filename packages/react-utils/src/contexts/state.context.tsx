import React, { createContext, useContext, useMemo, useState } from 'react';

export interface StateContext<TValue> {
  value: TValue;
  setValue: (value: TValue) => void;
}

export interface StateProviderProps<TValue> {
  defaultValue: TValue;
  children: React.ReactNode;
}

// Generic context factory for wrapping a state into a context provider
const buildStateContext = <TValue extends unknown>() => {
  const StateContext = createContext<StateContext<TValue> | undefined>(
    undefined
  );

  const StateProvider = ({
    defaultValue,
    children,
  }: StateProviderProps<TValue>) => {
    const [value, setValue] = useState<TValue>(defaultValue);

    const context = useMemo(
      () => ({
        value,
        setValue,
      }),
      [value, setValue]
    );

    return (
      <StateContext.Provider value={context}>{children}</StateContext.Provider>
    );
  };

  const useContextState = (): StateContext<TValue> => {
    const state = useContext(StateContext);

    if (!state) {
      throw new Error('Context provider missing');
    }

    return state;
  };

  return {
    StateProvider,
    useContextState,
  };
};

export default buildStateContext;
