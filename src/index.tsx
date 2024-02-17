import { createRoot } from 'react-dom/client'
import App from './app/App'
import 'app/styles/index.scss'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
  const root = createRoot(rootElement)

  root.render(<App />)
}
