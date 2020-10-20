import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/Home.module.css'
import Intro from '../components/intro'


export default function Home() {
  return (
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Intro />

    </Layout>
  )
}