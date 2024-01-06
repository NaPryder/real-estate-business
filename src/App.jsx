import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Suspense, lazy } from "react";
// import "./App.css";
import Layout from "./layout/Layout";

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
        {/* <Route index element={<HomeMentee />} /> */}
        {/* <Route path="/become-mentor" element={<HomeMentor />} /> */}
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
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
