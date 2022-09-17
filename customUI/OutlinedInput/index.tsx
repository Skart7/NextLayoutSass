import React from 'react';
import { ClassName } from '../.system/classess';
import { InputColor, InputSize } from '../.system/interfaces';

import styles from './OutlinedInput.module.sass'

interface OutlinedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: InputColor;
    inputSize?: InputSize;
    fullWidth?: boolean;
    label?: string;
    error?: boolean;
    endIcon?: React.ReactChild;
}

export const OutlinedInput = React.forwardRef(
    (props: OutlinedInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {

        const {
            color = 'primary',
            inputSize = 'medium',
            fullWidth = false,
            error = false,
            endIcon,
            label,
            ...otherProps
        } = props

        return (
            <div className={ClassName(styles.wrapper, fullWidth ? styles['fullWidth'] : '')}>
                <input
                    ref={ref}
                    {...otherProps}
                    className={ClassName(
                        styles.input,
                        styles[color],
                        styles[inputSize],
                        error ? styles['error'] : '',
                        endIcon ? styles['inputEndIcon'] : ''
                    )}
                />
                {label && (
                    <label className={ClassName(styles.label, styles[inputSize])}>{label}</label>
                )}
                {endIcon && (
                    <div className={styles.endIcon}>{endIcon}</div>
                )}
            </div>
        )
    })

OutlinedInput.displayName = 'OutlinedInput'