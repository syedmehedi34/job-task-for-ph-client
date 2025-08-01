import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import Error from "../pages/Error";
import ProtectedRoute from "./ProtectedRoute";
import MyCollege from "../pages/MyCollege/MyCollege";
import Profile from "../pages/Profile";
import CollegePage from "../pages/CollegePage";
import CollegeDetails from "../pages/CollegeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/home",
      //   element: (
      //     <ProtectedRoute>
      //       <div>Protected Content</div>
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/colleges",
        element: <CollegePage />,
      },
      {
        path: "/colleges/:collegeId",
        element: <CollegeDetails />,
      },
      {
        path: "/admission",
        element: <div>Admission Content</div>,
      },
      {
        path: "/my-college",
        element: (
          <ProtectedRoute>
            <MyCollege />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      // auth routes
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
