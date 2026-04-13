import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
  <BrowserRouter>
  <Provider store={store}>
          <App />
  </Provider>
  </BrowserRouter>
  )
