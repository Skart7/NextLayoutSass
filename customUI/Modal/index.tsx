import React from 'react'
import { allowScrollbar } from '../.system/allowScrollbar';
import { ClassName } from '../.system/classess';
import { onTrapFocus, onTrapFocusInit } from '../.system/trapFocus';
import { Portal } from '../Portal';

import styles from './Modal.module.sass'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    animate?: "fade" | "zoom";
    className?: string;
}

export const Modal = React.forwardRef((props: ModalProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const {
        open = false, onClose, children, animate = "fade", className = '', ...otherProps
    } = props

    const [active, setActive] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const refModal = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (open) {
            setTimeout(() => setVisible(true), 10)
            setTimeout(() => {
                setActive(true)
                refModal.current && onTrapFocusInit(refModal)
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
                className={ClassName(styles.modalOverlay, active ? styles.show : styles.hidden)}
                onClick={onClose}
            >
                <div
                    ref={refModal}
                    {...otherProps}
                    onKeyDown={(e) => onTrapFocus(e, refModal, onClose)}
                    className={ClassName(styles[animate], className, active ? styles.show : styles.hidden)}
                    onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </Portal>
    )

})

Modal.displayName = "Modal"
