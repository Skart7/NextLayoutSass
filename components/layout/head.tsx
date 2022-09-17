import React from 'react'
import Head from 'next/head'
import { app_name } from '../../localdb'

const HeadApp:React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title} | {app_name}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  )
}

export default HeadApp
