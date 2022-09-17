import React from 'react'
import dynamic from 'next/dynamic'

const CardProduct = dynamic(() => import('./card'))

import { ContainedButton, Text } from '../../../../customUI'

import { useAppSelector } from '../../../../redux/hooks'
import { selectCart } from '../../../../redux/slices/cart'

import styles from '../../../../styles/layout/cart.module.sass'

export default function CartList() {

    const cart = useAppSelector(selectCart)

    if (cart.items.length > 0) {
        return (
            <>
                <div className={styles.cartList}>
                    {
                        cart.items.map(data => (<CardProduct key={data.id} {...data} />))
                    }
                </div>
                <div className={styles.cartFooter}>
                    <Text className={styles.cartTotalText} variant="h6">Total: ${cart.amount}</Text>
                    <ContainedButton>Make Order</ContainedButton>
                </div>
            </>
        )
    }

    return <div className={styles.cartEmpty}><Text variant="caption">Your Cart is empty :/</Text></div>
}