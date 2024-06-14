

import Manga from "./Pages/Manga"
import Home from "./Pages/Home"
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {

  return(
    <>

   {/* <RouterProvider router={router} /> */}

    <BrowserRouter basename='/Manga-Studio/'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/:id" element={<Home/>}/>
      <Route path="/manga/:id" element={<Manga/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App

