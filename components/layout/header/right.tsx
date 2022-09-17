import React from 'react'
import { Badge, IconButton, NoSsr } from '../../../customUI'
import dynamic from 'next/dynamic'

const LocalMallRoundedIcon = dynamic(() => import('@mui/icons-material/LocalMallRounded'))
const LoginRoundedIcon = dynamic(() => import('@mui/icons-material/LoginRounded'))

import styles from '../../../styles/layout/header.module.sass'

import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { selectCart } from '../../../redux/slices/cart'
import { setModalCart, setModalLogin } from '../../../redux/slices/windows'


export default function HeaderRight() {

  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCart)

  const openCart = React.useCallback(() => {
    dispatch(setModalCart(true))
  }, [])
  const openLogin = React.useCallback(() => {
    dispatch(setModalLogin(true))
  }, [])

  return (
    <div className={styles.rightContent}>
      <IconButton onClick={openLogin} color="white"><LoginRoundedIcon /></IconButton>
      <NoSsr>
        <Badge value={cart.qty} max={9} color="primary">
          <IconButton onClick={openCart} color="white"><LocalMallRoundedIcon /></IconButton>
        </Badge>
      </NoSsr>
    </div>
  )
}
