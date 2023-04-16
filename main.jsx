import ReactDOM from 'react-dom/client'
import App from './src/App'
import './style.css'
const elementApp = document.getElementById('app')
const rootElement = ReactDOM.createRoot(elementApp)

rootElement.render(<App />)
