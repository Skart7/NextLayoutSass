import React from 'react'
import { ClassName } from '../.system/classess';
import { IconButtonColor } from '../.system/interfaces';
import useRipple from 'use-ripple-hook'

import styles from './IconButton.module.sass'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    color?: IconButtonColor;
}

export const IconButton = React.forwardRef((props: IconButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {

    const {
        className = '', color = 'text', children, ...otherProps
    } = props

    const [ripple, event] = useRipple({
        color: "rgba(255, 255, 255, 1)"
    })

    return (
        <button 
            ref={ripple}
            {...otherProps} 
            onMouseDown={event}
            className={ClassName(styles.button, styles[color], className)}>
            {children}
        </button>
    )
})

IconButton.displayName = 'IconButton'