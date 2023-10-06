import { lazy } from "react";

const AppRouter = lazy(() => import('./router/AppRouter'));


import "./App.css"

function App() {

  return (
    <AppRouter/>
  )
}

export default App
