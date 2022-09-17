import React from 'react'
import { ClassName } from '../.system/classess';
import { BadgeColor } from '../.system/interfaces';

import styles from './Badge.module.sass'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    color?: BadgeColor;
    max?: number;
    showZero?: boolean;
    value?: number;
}


export const Badge = React.forwardRef((props: BadgeProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const {
        children, className = "", color = "primary", max = null, showZero = false, value = 0, ...otherProps
    } = props

    const [showValue, setShowValue] = React.useState(false)
    const [Value, setValue] = React.useState<number | string | null>(0)

    React.useEffect(() => {
        value === 0 && !showZero ? setShowValue(false) : setShowValue(true);
        max && value > max ? setValue(`${max}+`) : setValue(value);
    }, [showZero, value, max])

    return (
        <div className={styles.badgeWrapper} ref={ref}>
            {
                showValue && (
                    <span
                        {...otherProps}
                        className={ClassName(styles.badge, styles[color], className)}
                    >{Value}</span>
                )
            }
            {children}
        </div>
    )
})

Badge.displayName = "Badge"