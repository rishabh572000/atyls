import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of the context state
interface MyContextState {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// Create the context with a default value
const MyContext = createContext<MyContextState | undefined>(undefined);

// Create a provider component
interface AppProviderProps {
    children: ReactNode;
}

interface Auth {
    email: string;
    password: string;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {

        const authString = sessionStorage.getItem('auth');
        let auth: Auth | null = null;

        if (authString) {
            try {
                auth = JSON.parse(authString)
                if (auth?.email === 'Rishabh572000' && auth?.password === 'Atlys') {
                    setIsAuthenticated(true);
                }
              
            } catch (error) {
                console.error('Failed to parse auth from sessionStorage', error);
            }
        }
       console.log('rama')


    }, [])

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    
    const contextValue = {
        isAuthenticated, 
        login, 
        logout 
    };
    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error('appContext must be used within a AppProvider');
    }
    return context;
};
