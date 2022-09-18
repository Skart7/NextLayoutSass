import React from 'react'

import Image from 'next/image'

import { Text, TextButton, useSnackbar } from '../../../customUI'

import styles from '../../../styles/pages/home/productcard.module.sass'

import { useAppDispatch } from '../../../redux/hooks'
import { addToCart } from '../../../redux/slices/cart'
import { Products } from '../../../localdb'

export default function ProductCard(data: Products) {

    const dispatch = useAppDispatch()
    const { newSnackbar } = useSnackbar()

    const [isHovering, setIsHovered] = React.useState(false)
    const onMouseEnter = () => setIsHovered(true)
    const onMouseLeave = () => setIsHovered(false)

    const onAddToCart = () => {
        dispatch(addToCart(data as any))
        newSnackbar({
            message: 'has been added',
            severity: 'success',
            title: data.label.substring(0, 20) + '...'
        })
    }

    return (
        <div className={styles.card}>
            <div className={styles.image} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {
                    !isHovering ? (
                        <Image
                            src={data.images[0]}
                            alt={data.label}
                            width={155}
                            height={155}
                            objectFit="contain"
                            loading="lazy"
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL={data.images[0]}
                        />
                    ) : (
                        <Image
                            src={data.images[1] || data.images[0]}
                            alt={data.label}
                            width={155}
                            height={155}
                            objectFit="contain"
                            loading="lazy"
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL={data.images[0]}
                        />
                    )
                }
            </div>
            <Text className={styles.label} variant="body2" component="h6">{data.label}</Text>
            <Text className={styles.price} variant="h4">$ {data.price}</Text>
            <TextButton fullWidth onClick={onAddToCart}>Add to Cart</TextButton>
        </div>
    )
}