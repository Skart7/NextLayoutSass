import React from 'react'
import dynamic from 'next/dynamic'

import { Drawer, IconButton, Text } from '../../../../customUI'

const CartList = dynamic(() => import('./list'))
const ArrowForwardIosRoundedIcon = dynamic(() => import('@mui/icons-material/ArrowForwardIosRounded'))

import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import { selectWindows, setModalCart } from '../../../../redux/slices/windows'

import styles from '../../../../styles/layout/cart.module.sass'

function Cart() {

    const dispatch = useAppDispatch()
    const windows = useAppSelector(selectWindows)

    const onClose = React.useCallback(() => {
        dispatch(setModalCart(false))
    }, [])

    return (
        <Drawer
            open={windows.cart}
            onClose={onClose}
            anchor="right"
            className={styles.cart}
        >

            <div className={styles.cartHeader}>
                <Text variant="h6">My Cart</Text>
                <IconButton onClick={onClose} color="white"><ArrowForwardIosRoundedIcon /></IconButton>
            </div>

            <CartList />

        </Drawer>
    )
}

export default React.memo(Cart)