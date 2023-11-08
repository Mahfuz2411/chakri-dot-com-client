import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error"
import Home from "../pages/Home";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import AddJobs from "../pages/AddJobs";
import MyJobs from "../pages/MyJobs";
import MyBids from "../pages/MyBids";
import Requests from "../pages/Requests";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateJobs from "../components/UpdateJobs";

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
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path: "/myjobs",
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path: "/mybids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: "/requests",
        element: <PrivateRoute><Requests></Requests></PrivateRoute>
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
      }
    ]
  },
]);

export default router;