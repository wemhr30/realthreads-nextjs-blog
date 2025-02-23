import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
        <title>Interactive Data Vizualisation</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>Interactive Data Vizualisation</h1>
        <div className={utilStyles.lightText}>
          <Date dateString= '2021-12-26'/>
        </div>
        <div>
          <h2 className={utilStyles.headingMd}>The Meteor Experiment</h2> 
        </div>
        <div>
            <p>The interactive chart below shows historical share price and quarterly revenue data for Apple (AAPL). Hover over (or tap) a data point to see its details. Drag the range sliders to zoom in to a subsection of the chart.</p> 
            <p>To embed the interactive chart in this page, I created a new GitHub repository for assets and hosted it on Netlify at [assets.realthreads.io](https://assets.realthreads.io/). I then embedded the chart into this page using an [iFrame](https://www.w3schools.com/tags/tag_iframe.ASP).</p>
            <p>I created the chart in [JupyterLab](https://jupyter.org/) using [pandas](https://pypi.org/project/pandas/) and [plotly python graphing library](https://plotly.com/graphing-libraries/). I [exported the plotly chart to HTML](https://plotly.com/python/interactive-html-export/).</p>
            <p>I collected the historical share price data from Yahoo! Finance using [yfinance](https://pypi.org/project/yfinance/) and scraped the historical revenue data from [Macrotrends](https://www.macrotrends.net/) using [requests](https://pypi.org/project/requests/) and [beautifulsoup4](https://pypi.org/project/beautifulsoup4/).</p>
            <p>You can find the Jupyter Notebook I used to create these charts on [Gist](https://gist.github.com/wemhr30/3c84b687abb824604a478b426be1e29f).</p> 
        </div>
        <div>
        <iframe width="100%" height="920" src="https://assets.realthreads.io/charts/apple_interactive.html" frameborder="0"></iframe>
          </div> 
      </article>
      </Layout>
    )
  }