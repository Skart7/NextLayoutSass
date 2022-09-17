import React from 'react'
import dynamic from 'next/dynamic'

import { Text } from '../../../customUI'

const ComputerRoundedIcon = dynamic(() => import('@mui/icons-material/ComputerRounded'))
const NextLink = dynamic(() => import('next/link'))

import styles from '../../../styles/layout/header.module.sass'
import { app_name } from '../../../localdb'

export default function HeaderLeft() {
  return (
    <div className={styles.leftContent}>
      <NextLink href="/" passHref>
        <a style={{ display: 'flex', textDecoration: 'none' }}>
          <ComputerRoundedIcon fontSize="large" className={styles.headerIcon} />
          <Text variant="h6" component="h1" className={styles.headerTextLogo}>{app_name}</Text>
        </a>
      </NextLink>
    </div>
  )
}
