//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App.tsx'
import { Provider } from 'react-redux'
import PmsStore from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
      <Provider store={PmsStore}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
)
