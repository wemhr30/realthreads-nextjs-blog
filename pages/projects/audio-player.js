import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import ReactAudioPlayer from 'react-audio-player';


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
        <ReactAudioPlayer
          src='/public/audio/year-of-the-flodd.m4a'
          autoPlay
          controls
        />
        </div>
          <p>Created using <a href ="https://www.ableton.com/en/note/">Ableton Note</a> and a guitar.</p> 
      </article>
      </Layout>
    )
  }