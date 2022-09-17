import React from 'react'
import { ClassName } from '../.system/classess'

import styles from './Container.module.sass'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    maxWidth: "lg" | "md" | "sm" | "xs" | "xl";
}

export const Container = React.forwardRef((props: ContainerProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const {
        children, className = "", maxWidth = "lg", ...otherProps
    } = props

    return (
        <div
            ref={ref}
            {...otherProps}
            className={ClassName(styles[maxWidth], className)}
        > {children} </div>
    )
})

Container.displayName = "Container"