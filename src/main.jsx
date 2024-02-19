/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './app/features/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </Provider>,
)
