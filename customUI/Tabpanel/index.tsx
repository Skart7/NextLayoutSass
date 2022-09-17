import React from 'react'
import { ClassName } from '../.system/classess';

import { useTabValue } from '../Tabprovider'

import styles from './Tabpanel.module.sass'

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export const TabPanel = React.forwardRef((props: TabPanelProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const { contextValue } = useTabValue()

    const { value = '1', children, className = '', ...otherProps } = props

    if (value !== contextValue) return null

    return (
        <div
            ref={ref}
            {...otherProps}
            className={ClassName(styles.tabpanel, value === contextValue ? styles.show : styles.hidden, className)}
        >
            {children}
        </div>
    )

})

TabPanel.displayName = 'TabPanel'