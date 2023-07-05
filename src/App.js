import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.js";



export default function App() {
  return(
    <RouterProvider router={AppRoutes} />
  );
}