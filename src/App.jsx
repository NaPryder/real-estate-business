import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";

const AboutUs = lazy(() => import("@/pages/AboutUs/AboutUs"));
const Service = lazy(() => import("@/pages/Service/Service"));
const Properties = lazy(() => import("@/pages/Properties/Properties"));

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Suspense>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="/about-us"
          element={
            <Suspense>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/service"
          element={
            <Suspense>
              <Service />
            </Suspense>
          }
        />
        <Route
          path="/properties"
          element={
            <Suspense>
              <Properties />
            </Suspense>
          }
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
