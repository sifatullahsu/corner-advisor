import AddServicePage from "../pages/AddServicePage";
import BlogPage from "../pages/BlogPage";
import EditReview from "../pages/EditReview";
import LoginPage from "../pages/LoginPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import RegisterPage from "../pages/RegisterPage";
import ServicesPage from "../pages/ServicesPage";
import SingleServicesPage from "../pages/SingleServicesPage";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: HomePage } = require("../pages/HomePage");

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('http://localhost:5000/services?page=1&size=3')
      },
      {
        path: '/services',
        element: <ServicesPage></ServicesPage>
      },
      {
        path: '/services/:id',
        element: <SingleServicesPage></SingleServicesPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/blog',
        element: <BlogPage></BlogPage>
      },
      {
        path: '/my-reviews',
        element: <PrivateRoute><MyReviewsPage></MyReviewsPage></PrivateRoute>
      },
      {
        path: '/my-reviews/:id',
        element: <PrivateRoute><EditReview></EditReview></PrivateRoute>
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddServicePage></AddServicePage></PrivateRoute>
      },
      {
        path: '/*',
        element: <div>Error Page</div>
      }
    ]
  }
]);