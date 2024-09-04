import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './Router'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {


  return (
    <>
      <RouterProvider router={Router}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  )
}

export default App
