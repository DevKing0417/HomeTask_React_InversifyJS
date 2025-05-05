import React, { createContext, useContext } from 'react';
import { Container } from 'inversify';

const InversifyContext = createContext<{ container: Container | null }>({ container: null });

export const Provider: React.FC<{ container: Container; children: React.ReactNode }> = ({ container, children }) => {
    return (
        <InversifyContext.Provider value={{ container }}>
            {children}
        </InversifyContext.Provider>
    );
};

export function useInjection<T>(identifier: symbol): T {
    const { container } = useContext(InversifyContext);
    if (!container) {
        throw new Error('Container not initialized');
    }
    return container.get<T>(identifier);
} 