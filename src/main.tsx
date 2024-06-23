import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import routes from "./router/index"
import './index.css'
import "./style.css"
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
    <RouterProvider router={routes}/>
    </Suspense>
  </React.StrictMode>,
)
