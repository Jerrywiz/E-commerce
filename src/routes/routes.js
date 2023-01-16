
import React from "react";
import MainLayout from "../layout/mainLayout";
import DashBoard from "../views/dashboard";





const appRoutes = [
    {
      path: "/teacher/dashboard",
      layout: MainLayout,
      useAuth: false,
      element: DashBoard
    },]

    export default appRoutes