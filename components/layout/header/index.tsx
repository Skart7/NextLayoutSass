import React from 'react'

import HeaderLeft from './left'
import HeaderRight from './right'

import { Container } from '../../../customUI'

import styles from '../../../styles/layout/header.module.sass'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container maxWidth="lg">
        <div className={styles.wrapper}>
          <HeaderLeft />
          <HeaderRight />
        </div>
      </Container>
    </header>
  )
}
