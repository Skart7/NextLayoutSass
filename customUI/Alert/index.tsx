import React from 'react'
import { ClassName } from '../.system/classess'
import { AlertColor, AlertVariant } from '../.system/interfaces'

import styles from './Alert.module.sass'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    message: string;
    className?: string;
    severity?: AlertColor;
    variant?: AlertVariant;
    title?: string;
}

export const Alert = React.forwardRef((props: AlertProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const {
        message, className = '', severity = "success", variant = "filled", title, ...otherProps
    } = props

    return (
        <div
            ref={ref}
            className={ClassName(styles.alert, styles[variant], styles[severity], className)}
            {...otherProps}
        >
            <span className={styles.messageIcon} />
            <div className={styles.messageWrapper}>
                {title && <p className={styles.messageTitle}>{title}</p>}
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    )
})

Alert.displayName = "Alert"