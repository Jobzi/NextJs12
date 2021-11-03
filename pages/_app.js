import Footer from '../components/footer';
import Header from '../components/header';
import { InfomationContextProvider } from '../context/informationContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <InfomationContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </InfomationContextProvider>
    </>
  ); 
}

export default MyApp
