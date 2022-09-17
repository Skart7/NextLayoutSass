import React from 'react'
import { ClassName } from '../.system/classess'
import { ButtonColor, ButtonSize } from '../.system/interfaces'
import useRipple from 'use-ripple-hook'

import styles from './TextButton.module.sass'

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    fullWidth?: boolean;
}

export const TextButton = React.forwardRef(
    (props: TextButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {

        const {
            children, className = '', color = 'primary', size = 'medium', fullWidth = false, ...otherProps
        } = props

        const [ripple, event] = useRipple({
            color: "rgba(255, 255, 255, 1)"
        })

        return (
            <button
                {...otherProps}
                className={ClassName(styles.button, className, styles[color], styles[size], fullWidth ? styles['fullWidth'] : '')}
                ref={ripple}
                onMouseDown={event}
            >
                {children}
            </button>
        )
    })

TextButton.displayName = 'TextButton'