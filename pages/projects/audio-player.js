import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
        <title>Year of the Flood</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>Year of the Flood</h1>
        <div className={utilStyles.lightText}>
          <Date dateString= '2024-02-03'/>
        </div>
        <div >
          <audio controls
            preload="none">
            <source src="https://realthreads-media.s3.us-east-2.amazonaws.com/year-of-the-flood.ogg" type="audio/mpeg"/>
            Your browser does not support the audio element.
          </audio>
        </div>
          <p>Created with <a href="https://www.ableton.com/en/note/">Ableton Note</a> and a guitar.</p> 
      </article>
      </Layout>
    )
  }