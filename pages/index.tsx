import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'
import { sanityClient, urlFor } from '../sanity'
import { Props } from '../typings'

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <Posts posts={posts} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
  },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
