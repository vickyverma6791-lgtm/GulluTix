
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ClerkProvider} from "@clerk/clerk-react"
import { Toaster } from 'react-hot-toast'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')).render(
<StrictMode >
  <BrowserRouter>
    <App />
    <Toaster 
    position='top-right' 
    toastOptions={{
      style:{
        background : "#102019",
        color : "#F8FAFC",
        border : "1px solid rgba(255,255,.08)"

      }
    }}
    
    />
  </BrowserRouter>
 </StrictMode>  
 
)
