import React from 'react'
import { ClassName } from '../.system/classess'

import styles from './text.module.sass'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption" | "button";
    children: React.ReactNode;
    component?: React.ElementType;
}

export const Text = React.forwardRef((props: TextProps, ref: React.ForwardedRef<HTMLParagraphElement>) => {

    const {
        className = '', variant = 'body1', children, component: Tag = 'p', ...otherProps
    } = props

    return (
        <Tag 
            ref={ref} 
            className={ClassName(styles[variant], className)}
            {...otherProps}
        >{children}</Tag>)

})

Text.displayName = "Text"