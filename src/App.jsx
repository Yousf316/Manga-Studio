

import Manga from "./Pages/Manga"
import Home from "./Pages/Home"
import {RouterProvider,createBrowserRouter,BrowserRouter,Route,Routes} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/Manga-Studio/",
    element: <Home />,
    children: [
      
      {
        path: "/Manga-Studio/manga/:id",
        element: <Manga/>,
      },
    ],
  },
]);

function App() {

  return(
    <>

   <RouterProvider router={router} />

    {/* <BrowserRouter basename='/Manga-Studio/'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Manga-Studio/manga/:id" element={<Manga/>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  )

}

export default App

