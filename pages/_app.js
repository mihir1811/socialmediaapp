import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import axios from 'axios'

axios.defaults.withCredentials = true

function MyApp({ Component, pageProps }) {
  return  <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
