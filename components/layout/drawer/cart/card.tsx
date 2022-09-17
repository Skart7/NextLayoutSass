import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const CloseRoundedIcon = dynamic(() => import('@mui/icons-material/CloseRounded'))
const RemoveRoundedIcon = dynamic(() => import('@mui/icons-material/RemoveRounded'))
const AddRoundedIcon = dynamic(() => import('@mui/icons-material/AddRounded'))

import { IconButton, Text } from '../../../../customUI'

import { useAppDispatch } from '../../../../redux/hooks'
import { deleteFromCart, removeFromCart, addToCart, CartItem } from '../../../../redux/slices/cart'

import styles from '../../../../styles/layout/cartProduct.module.sass'

export default function CardPorduct(data: CartItem) {

    const dispatch = useAppDispatch()

    const onDeleteProduct = () => {
        dispatch(deleteFromCart(data))
    }
    const onDeincrementProduct = () => {
        dispatch(removeFromCart(data))
    }
    const onIncrementProduct = () => {
        dispatch(addToCart(data))
    }

    return (
        <div className={styles.card}>
            <Text variant="caption" className={styles.cardText}>{data.label}</Text>
            <div className={styles.cardContent}>
                <div className={styles.cardImage}>
                    <Image
                        src={data.images}
                        alt={data.label}
                        width={60}
                        height={60}
                        objectFit="contain"
                        loading="lazy"
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={data.images}
                    />
                </div>
                <div className={styles.cardContentPrice}>
                    <Text className={styles.price} variant="h6">${data.price}</Text>
                    <Text className={styles.qty} variant="body1">x{data.count}</Text>
                </div>
            </div>
            <div className={styles.cardActions}>
                <div className={styles.cardCountController}>
                    <IconButton onClick={onDeincrementProduct}>
                        <RemoveRoundedIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={onIncrementProduct}>
                        <AddRoundedIcon fontSize="small" />
                    </IconButton>
                </div>
                <IconButton onClick={onDeleteProduct}>
                    <CloseRoundedIcon />
                </IconButton>
            </div>
        </div>
    )

}