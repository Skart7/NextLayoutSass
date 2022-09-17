import React from 'react'
import { ClassName } from '../.system/classess'
import { ButtonColor } from '../.system/interfaces';

import { Tab } from '../Tab'

import styles from './Tablist.module.sass'

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
    listArray: { label: string, value: string }[];
    className?: string;
    tabColor?: ButtonColor;
}

export const TabList = React.forwardRef((props: TabListProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const { listArray, className = '', tabColor = 'primary', ...otherProps } = props

    return (
        <div
            ref={ref}
            {...otherProps}
            className={ClassName(styles.tablist, className)}
        >
            {listArray.map(item => (
                <Tab
                    value={item.value}
                    label={item.label}
                    color={tabColor}
                    key={item.value}
                />
            ))}
        </div>
    )

})

TabList.displayName = "TabList"