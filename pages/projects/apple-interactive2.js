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
          <h2 className={utilStyles.headingMd}>Apple Historical Share Price</h2> 
        </div>
        <div>
            <p>The interactive chart below shows historical share price and quarterly revenue data for Apple (AAPL). Hover over (or tap) a data point to see its details. Drag the range sliders to zoom in to a subsection of the chart.</p> 
            <p>Assets hosted at <a href="https://assets.realthreads.io/">assets.realthreads.io</a>. Chart embedded using <a href="https://www.w3schools.com/tags/tag_iframe.ASP">iFrame</a>.</p>
            <p>Chart created in <a href="https://jupyter.org/">JupyterLab</a> using <a href="https://pypi.org/project/pandas/">pandas</a> and <a href="https://plotly.com/graphing-libraries/">plotly python graphing library</a> exported to <a href="https://plotly.com/python/interactive-html-export/">HTML</a>.</p>
            <p>Historical share price data collected from Yahoo! Finance using <a href="https://pypi.org/project/yfinance/">yfinance</a>. Historical revenue data scraped from <a href="https://www.macrotrends.net/">Macrotrends</a> using <a href="https://pypi.org/project/requests/">requests</a> and <a href="https://pypi.org/project/beautifulsoup4/">beautifulsoup4</a>.</p>
            <p>Jupyter Notebook available on <a href = "https://gist.github.com/wemhr30/3c84b687abb824604a478b426be1e29f">Gist</a></p> 
        </div>
        <div>
        <iframe width="100%" height="920" src="https://assets.realthreads.io/charts/apple_interactive.html" frameborder="0"></iframe>
          </div> 
      </article>
      </Layout>
    )
  }