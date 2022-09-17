import { NextPage } from "next"
import React from "react"

import Layout from '../components/layout'
import Market from "../components/pages/home/market"

const Home: NextPage = () => {

  return (
    <Layout title="Main page">
      <Market />
    </Layout >
  )
}
export default Home