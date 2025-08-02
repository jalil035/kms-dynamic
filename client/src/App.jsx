import { Button } from "@/components/ui/button";
import Home from "./components/ui/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
