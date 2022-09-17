import React from 'react'
import { ClassName } from '../.system/classess';
import { LoaderColor } from '../.system/interfaces';

import styles from './Loader.module.sass'

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number;
    color?: LoaderColor;
}

export const Loader = React.forwardRef((props: LoaderProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const {
        size = 30, color = "primary", ...otherProps
    } = props

    return (
        <div
            ref={ref}
            {...otherProps}
            className={ClassName(styles.loader, styles[color])}
            style={{ width: size, height: size }}
        />
    )

})

Loader.displayName = 'Loader'