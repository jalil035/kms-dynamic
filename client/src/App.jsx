import { Button } from "@/components/ui/button";
import Home from "./components/ui/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
