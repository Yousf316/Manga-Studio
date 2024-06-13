

import Manga from "./Pages/Manga"
import Home from "./Pages/Home"
import {HashRouter,RouterProvider,createBrowserRouter,BrowserRouter,Route,Routes} from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "/Manga-Studio/",
//     element: <Home />,
//     children: [
      
//       {
//         path: "/Manga-Studio/manga/:id",
//         element: <Manga/>,
//       },
//     ],
//   },
// ]);

function App() {

  return(
    <>

   {/* <RouterProvider router={router} /> */}

    <HashRouter basename='/Manga-Studio/'>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/manga/:id" element={<Manga/>}/>
    </Routes>
    </HashRouter>
    </>
  )

}

export default App

