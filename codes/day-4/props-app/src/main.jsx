import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import { StrictMode } from 'react'

const rootHTML = document.getElementById('root')
const rootReactElement = createRoot(rootHTML)
rootReactElement.render(
    <StrictMode>
        <App />
    </StrictMode>
)

//const app = App()
//rootReactElement.render(app)
