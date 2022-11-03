import React, { createContext, useContext } from 'react';

export interface ValueProviderProps<TValue> {
  value: TValue;
  children: React.ReactNode;
}

// Generic context factory for wrapping a value into a context provider
const buildValueContext = <TValue extends object>() => {
  const ValueContext = createContext<TValue | undefined>(undefined);

  const ValueProvider = ({ value, children }: ValueProviderProps<TValue>) => {
    return (
      <ValueContext.Provider value={value}>{children}</ValueContext.Provider>
    );
  };

  const useValue = (): TValue => {
    const value = useContext(ValueContext);

    if (!value) {
      throw new Error('Context provider missing');
    }

    return value;
  };

  return {
    ValueProvider,
    useValue,
  };
};

export default buildValueContext;
