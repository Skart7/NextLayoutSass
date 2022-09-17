import { AppProps } from 'next/app'
import { SnackbarProvider } from '../customUI'
import { Provider } from 'react-redux'

import '../styles/global.sass'
import { store } from '../redux/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  )
}

export default App