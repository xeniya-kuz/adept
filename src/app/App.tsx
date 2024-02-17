import { MainPage } from 'pages/MainPage/MainPage'
import { store } from 'app/providers/StoreProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { PageError } from 'widgets/PageError'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

export default function App (): JSX.Element {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <ErrorBoundary fallback={<PageError/>}>
                  <div className='app'>
                      <MainPage/>
                  </div>
              </ErrorBoundary>
          </BrowserRouter>
      </Provider>
  )
}
