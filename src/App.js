import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/HOME/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import OurCourses from "./components/OurCourses/OurCourses";
import ContectUs from "./components/contectUs/ContectUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "our-courses",
        element: <OurCourses />,
      },
      {
        path: "contect",
        element: <ContectUs />,
      },
     
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
