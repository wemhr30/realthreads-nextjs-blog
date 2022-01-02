import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
      <title>None More Real</title>
      </Head>
      <article>
      <h1 className={utilStyles.headingXl}>Lockdown Home School</h1>
      <div className={utilStyles.lightText}>
        <Date dateString= '2020-05-22'/>
      </div>
      <div>
        <h2 className={utilStyles.headingMd}>The Meteor Experiment</h2> 
      </div>
      <div >
        <iframe src="https://player.vimeo.com/video/421653663?h=cbdb3679fc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Meteor experiment"></iframe></div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div>
        <h2 className={utilStyles.headingMd}>The Pond Water Exploration</h2>
      </div>
      <div >
        <iframe src="https://player.vimeo.com/video/408750543?h=773a838eba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="The Pond Water Exploration"></iframe></div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <p>Videos embeded from Vimeo.</p> 
    </article>
    </Layout>
  )
}