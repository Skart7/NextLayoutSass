import React from 'react'

import styles from './Tab.module.sass'

import { useTabValue } from '../Tabprovider'
import { ClassName } from '../.system/classess';
import { ButtonColor } from '../.system/interfaces';

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    label: string;
    color?: ButtonColor;
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Tab = React.forwardRef((props: TabProps, ref: React.ForwardedRef<HTMLButtonElement>) => {

    const { contextValue, changeValue } = useTabValue()

    const { value, label, color = 'primary', onClick, ...otherProps } = props

    const onHanderClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        onClick && onClick(e)
        changeValue(value)
    }

    return (
        <button
            onClick={onHanderClick}
            ref={ref}
            {...otherProps}
            className={ClassName(styles.tab, styles[color], value === contextValue ? styles.active : '')}
        >{label}</button>
    )
})

Tab.displayName = "Tab"