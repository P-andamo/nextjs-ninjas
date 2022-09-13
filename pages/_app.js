import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout test='100'>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
