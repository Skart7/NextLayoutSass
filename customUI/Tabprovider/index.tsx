import React from 'react'

interface ProviderProps {
    children: React.ReactNode
}

interface InitialStateProps {
    contextValue: string,
    changeValue: (val: string) => void
}

const InitialState: InitialStateProps = {
    contextValue: "1",
    changeValue: () => { }
}

const TabContext = React.createContext<InitialStateProps>(InitialState)

export function useTabValue() {
    return React.useContext(TabContext)
}

export function TabProvider({ children }: ProviderProps) {

    const [contextValue, setValue] = React.useState(InitialState.contextValue)

    const changeValue = (val: string) => {
        setValue(val)
    }

    const value = {
        contextValue, changeValue
    }

    return (
        <TabContext.Provider value={value}>
            {children}
        </TabContext.Provider>
    )
}