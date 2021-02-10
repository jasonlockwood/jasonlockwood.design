import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/intro'
import Button from '../components/button'
import Link from "next/link";


export default function Home() {
  return (
    <Layout home>

      <Intro />

      <Link href="/about">
        <a><Button primary>Find out more</Button></a>
      </Link>

      <Link href="/">
        <a><Button secondary>Get in touch</Button></a>
      </Link>

    </Layout>
  )
}