
import Home from './routes/homePage/Home';
import List from './routes/listPage/List';
import Single from './routes/singlePage/Single';
import Profile from './routes/profilePage/Profile';
import Layout from './routes/layout/Layout';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/list",
          element:<List/>
        },
        {
          path:"/:id",
          element:<Single/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }
      ]
    },
  
  ]);
  return (
    

    <RouterProvider router={router}/>
  )
}

export default App