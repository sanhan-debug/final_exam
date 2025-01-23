import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoritesPrivoder from './Context/favoriteContext.jsx'
import BasketPrivoder from './Context/basketContext.jsx'

createRoot(document.getElementById('root')).render(

  <BasketPrivoder>
    <FavoritesPrivoder>
      <App />
    </FavoritesPrivoder>
  </BasketPrivoder>

)
