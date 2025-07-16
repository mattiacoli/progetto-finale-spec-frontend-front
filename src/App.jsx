import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import DefaulLayout from "./layouts/DefaultLayouts"


// pages
import Homepage from "./pages/Homepage"
import ProductDetail from "./pages/ProductDetails"


function App() {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaulLayout} >
            <Route path="/" Component={Homepage} />
            <Route path="/:id" Component={ProductDetail} />

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App
