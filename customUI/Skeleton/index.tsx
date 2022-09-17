import React from 'react'
import { ClassName } from '../.system/classess'

import styles from './Skeleton.module.sass'

interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "text" | "circular" | "rectangular",
}

export const Skeleton = React.forwardRef((props:SkeletonProps, ref:React.ForwardedRef<HTMLSpanElement>) => {

    const {
        variant = "text", className = '', ...otherProps
    } = props

    return (
        <span 
            ref={ref} 
            {...otherProps}
            className={ClassName(styles.skeleton, className, styles[variant])} 
        />
    )

})

Skeleton.displayName = "Skeleton"