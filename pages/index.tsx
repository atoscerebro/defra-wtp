import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PageHeader } from './page-header'
import { HomePage } from './homepage'
import { PageFooter } from './page-footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageHeader/>
      <HomePage/>
      <PageFooter/>
    </div>
  )
}

export default Home
