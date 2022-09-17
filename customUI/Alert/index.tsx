import React from 'react'
import { ClassName } from '../.system/classess'
import { AlertColor, AlertVariant } from '../.system/interfaces'

import styles from './Alert.module.sass'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    severity?: AlertColor;
    variant?: AlertVariant;
}

export const Alert = React.forwardRef((props: AlertProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const {
        children, className = '', severity = "success", variant = "filled", ...otherProps
    } = props

    return (
        <div
            ref={ref}
            className={ClassName(styles.alert, styles[variant], styles[severity], className)}
            {...otherProps}
        >
            <p className={styles.message}>
                <span className={styles.messageIcon} />
                {children}
            </p>
        </div>
    )
})

Alert.displayName = "Alert"