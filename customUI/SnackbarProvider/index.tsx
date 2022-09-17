import React from 'react'
import { ClassName } from '../.system/classess';
import { AlertColor } from '../.system/interfaces';
import { Alert } from '../Alert';
import { Portal } from '../Portal';

import styles from './SnackbarProvider.module.sass'

interface Item { message: string; id?: string; severity: AlertColor }

interface SnackbarProviderProps {
    children: React.ReactNode;
    visibleAlerts?: number;
    autoHideDuration?: number;
    anchor?: { y: "top" | "bottom", x: "left" | "right" };
}

interface InitialStateProps {
    newSnackbar: (params: Item) => void;
}

const InitialState: InitialStateProps = {
    newSnackbar: () => { }
}

const SnackbarContext = React.createContext<InitialStateProps>(InitialState)

export function useSnackbar() {
    return React.useContext(SnackbarContext)
}

export function SnackbarProvider(props: SnackbarProviderProps) {

    const {
        anchor = { y: 'top', x: 'right' },
        autoHideDuration = 3000,
        visibleAlerts = 3,
        children,
    } = props

    const [items, setItems] = React.useState<Item[]>([])

    const newSnackbar = (params: Item) => {
        const randomId = "id" + Math.random().toString(16).slice(2)

        setItems([...items, {
            message: params.message,
            severity: params.severity,
            id: randomId
        }])

        setTimeout(() => {
            setItems(prev => prev.filter(obj => obj.id !== randomId))
        }, autoHideDuration)
    }

    const value = { newSnackbar }

    return (
        <SnackbarContext.Provider value={value}>
            {
                items.length > 0 && (
                    <Portal>
                        <div
                            className={ClassName(styles.snackbarList, styles[anchor.y], styles[anchor.x])}>
                            {
                                items.slice(-visibleAlerts).map((data) => (
                                    <Alert key={data.id} severity={data.severity} variant="filled">
                                        {data.message}
                                    </Alert>
                                ))
                            }
                        </div>
                    </Portal>
                )
            }
            {children}
        </SnackbarContext.Provider>
    )
}