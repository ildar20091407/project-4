import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/main.scss'
import './css/media.scss'
import './css/i18n';

import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
)
