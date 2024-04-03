
import Home from './routes/homePage/Home';
import List from './routes/listPage/List';
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profilePage/ProfilePage';
import Layout from './routes/layout/Layout';
import Login from './routes/login/Login';
import Register from './routes/register/Register';

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
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        }, {
          path:"/register",
          element:<Register/>
        }
        
      ]
    },
  
  ]);
  return (
    

    <RouterProvider router={router}/>
  )
}

export default App