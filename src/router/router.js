import Error from "../components/Error";
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
        loader: () => fetch('https://corner-advisor-server.vercel.app/services?page=1&size=3')
      },
      {
        path: '/services',
        element: <ServicesPage></ServicesPage>,
        loader: () => fetch('https://corner-advisor-server.vercel.app/services')
      },
      {
        path: '/services/:id',
        element: <SingleServicesPage></SingleServicesPage>,
        loader: ({ params }) => fetch(`https://corner-advisor-server.vercel.app/services/${params.id}`)
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
        element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
        loader: ({ params }) => fetch(`https://corner-advisor-server.vercel.app/reviews/${params.id}`)
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddServicePage></AddServicePage></PrivateRoute>
      },
      {
        path: '/*',
        element: <Error></Error>
      }
    ]
  }
]);