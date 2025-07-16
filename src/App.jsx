import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaulLayout from "./layouts/DefaultLayouts"


// pages
import Homepage from "./pages/Homepage"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaulLayout} >
          <Route path="/" Component={Homepage} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
