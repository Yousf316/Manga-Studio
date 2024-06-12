

import Manga from "./Pages/Manga"
import Home from "./Pages/Home"
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/manga/:id" element={<Manga/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App

