import React from 'react'
import dynamic from 'next/dynamic'

import Header from './header'
import HeadApp from './head'

import { Container, NoSsr } from '../../customUI'
import Authorization from './modal/authorization'
const Cart = dynamic(() => import("./drawer/cart"))

interface LayoutProps {
  children: React.ReactNode,
  title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {

  return (
    <>
      <HeadApp title={title} />
      <Header />
      <Container maxWidth="lg">
        {children}
      </Container>

      <NoSsr>
        <Cart />
        <Authorization />
      </NoSsr>

    </>
  )
}

export default React.memo(Layout)