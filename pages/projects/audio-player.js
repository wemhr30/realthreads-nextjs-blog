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
          <audio controls>
            <source src="https://njmtcajtgvjvkllw.public.blob.vercel-storage.com/audio/year-of-the-flood-mrAl14kO9Ck7ozahreWfYg08sjjs0d.ogg" type="audio/mpeg"/>
            Your browser does not support the audio element.
          </audio>
        </div>
          <p>Created with <a href="https://www.ableton.com/en/note/">Ableton Note</a> and a guitar.</p> 
      </article>
      </Layout>
    )
  }