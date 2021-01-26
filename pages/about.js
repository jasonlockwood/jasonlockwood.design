import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function About() {
  return (
    <Layout home>
      <Head>
      <title>{siteTitle}</title>
      </Head>
      <h1>Frank Herbert</h1>
      <p>
      I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.
      </p>
    </Layout>
  )
}
