import React from 'react'
import { ClassName } from '../.system/classess'
import { onTrapFocus, onTrapFocusInit } from '../.system/trapFocus'
import { allowScrollbar } from '../.system/allowScrollbar'

import styles from './drawer.module.sass'
import { Portal } from '../Portal'

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    anchor?: "left" | "right",
    children: React.ReactNode,
    className?: string,
    open: boolean,
    onClose: () => void,
}

export const Drawer = React.forwardRef((props: DrawerProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const {
        open = false, children, className = "", anchor = "left", onClose, ...otherProps
    } = props

    const [active, setActive] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const refDrawer = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (open) {
            setTimeout(() => setVisible(true), 10)
            setTimeout(() => {
                setActive(true)
                refDrawer.current && onTrapFocusInit(refDrawer)
            }, 100)
            return allowScrollbar(false)
        }
        setTimeout(() => setActive(false), 10)
        setTimeout(() => setVisible(false), 100)
        return allowScrollbar(true)
    }, [open])

    if (!visible) return null

    return (
        <Portal>
            <div
                ref={ref}
                className={ClassName(styles.drawerOverlay, active ? styles.show : styles.hidden)}
                onClick={onClose}
            >
                <div
                    {...otherProps}
                    className={ClassName(styles[anchor], className, active ? styles.show : styles.hidden)}
                    onKeyDown={(e) => onTrapFocus(e, refDrawer, onClose)}
                    onClick={(e) => e.stopPropagation()}
                >{children}</div>
            </div>
        </Portal>
    )

})

Drawer.displayName = "Drawer"