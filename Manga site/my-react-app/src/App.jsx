

import Manga from "./Pages/Manga"
import Home from "./Pages/Home"
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {

  return(
    <>
    <BrowserRouter basename='/Manga site/my-react-app/'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/manga/:id" element={<Manga/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App

