import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A personal project to explore web technologies, tools and workflows. Built with Next.js. Hosted on Vercel.</p>
      </section>
     
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key='1'>
              <Link href='/projects/none-more-real'>
                <a>None More Real</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString= '2017-08-18'/>
              </small>
            </li>
            <li className={utilStyles.listItem} key='2'>
              <Link href='/projects/home-school'>
                <a>Lockdown Home School</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString= '2020-05-22'/>
              </small>
            </li>
            <li className={utilStyles.listItem} key='3'>
              <Link href='/projects/apple-interactive2'>
                <a>Interactive Data Vizualization</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString= '2021-12-26'/>
              </small>
            </li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}