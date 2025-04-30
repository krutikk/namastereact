import React, { use } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router";
import About from "./components/About";

import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestauratMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="APP">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
// Create a router
const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
          path: "/",
          Component: Body,
        },
        { path: "about", Component: About },
        { path: "contact", Component: ContactUs },
        { path: "/restaurant/:resId", Component: RestauratMenu },
      ],
    },
  ],
  {
    errorElement: <Error />,
  }
);

// Provide the router to the application
const appRouter = <RouterProvider router={router} />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(appRouter);
