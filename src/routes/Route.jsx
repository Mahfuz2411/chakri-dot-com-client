import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error"
import Home from "../pages/Home";
import SignIn from "../auth-pages/SignIn";
import SignUp from "../auth-pages/SignUp";
import AddJobs from "../pages/AddJobs";
import MyJobs from "../pages/MyJobs";
import MyBids from "../pages/MyBids";
import Requests from "../pages/Requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path:"/addjobs",
        element: <AddJobs></AddJobs>
      },
      {
        path: "/myjobs",
        element: <MyJobs></MyJobs>
      },
      {
        path: "/mybids",
        element: <MyBids></MyBids>
      },
      {
        path: "/requests",
        element: <Requests></Requests>
      }
    ]
  },
]);

export default router;