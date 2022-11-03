import React, { createContext, useContext } from 'react';

export type HookProviderProps<TParameters> = TParameters & {
  children: React.ReactNode;
};

// Generic context factory for wrapping a hook into a context provider
const buildHookContext = <TParams, TResult>(
  hook: (props: TParams) => TResult
) => {
  const HookContext = createContext<TResult | undefined>(undefined);

  const HookProvider = (props: HookProviderProps<TParams>) => {
    const result = hook(props);

    return (
      <HookContext.Provider value={result}>
        {props.children}
      </HookContext.Provider>
    );
  };

  const useHook = (): TResult => {
    const value = useContext(HookContext);

    if (!value) {
      throw new Error('Context provider missing');
    }

    return value;
  };

  return {
    HookProvider,
    useHook,
  };
};

export default buildHookContext;
