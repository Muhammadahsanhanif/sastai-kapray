import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Routingweb from './route'
import { NextUIProvider } from '@nextui-org/react'
import AuthcontextProvider from './context/authcontext'

createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <AuthcontextProvider>
      <Routingweb />
    </AuthcontextProvider>

  </NextUIProvider>


)
