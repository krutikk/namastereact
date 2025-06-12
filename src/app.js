import React, { use } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React, { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router";

import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestauratMenu from "./components/RestaurantMenu";
import { useState, useEffect } from "react";
import UserContext from "./utils/useContext";


const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Krutik Khandhadiya",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="APP">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};
// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "about",
        Component: () => (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      { path: "contact", Component: ContactUs },
      {
        path: "grocery",
        Component: () => (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", Component: RestauratMenu },
    ],
  },
]);

// Provide the router to the application
const appRouter = <RouterProvider router={router} />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(appRouter);
