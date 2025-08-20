import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from "./pages/ErrorPages/NotFound";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutPage from "./pages/About/AboutPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactus" element={<ContactUsPage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
