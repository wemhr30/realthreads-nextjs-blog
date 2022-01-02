import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'
import realThread from '../../public/images/nmr-full.jpg'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
      <title>None More Real</title>
      </Head>
      <article>
      <h1 className={utilStyles.headingXl}>None More Real</h1>
      <div className={utilStyles.lightText}>
        <Date dateString= '2017-08-18'/>
      </div>
      <div>
        <p>Atomic orbital of the electron in a hydrogen atom rendered in cross-stitch. The lighter the color, the higher the probability of finding the electron.</p> 
        <p>Image imported using 'next/image'.</p> 
      </div>
      <Image
        src={realThread}
        alt="A cross stitch"
        width={3024} 
        height={4032}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </article>
    </Layout>
  )
}