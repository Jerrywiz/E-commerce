import React, { Fragment } from "react"

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import { routes } from "./routes"

import AuthContextProvider from "@ikw/context/AuthContext"

const renderRoutes = ({ component: Component, ...route }) => {
  const Protected = route.isAuthenticated ? ProtectedRoutes : Fragment
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <React.Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100%",
                background: "#e3e3e3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <h1>Loading...</h1>
            </div>
          }
        >
          <AuthContextProvider>
            <Protected>
              <Component pagePath={route.path} />
            </Protected>
          </AuthContextProvider>
        </React.Suspense>
      }
    />
  )
}

export const RouterWrapper = () => (
  <Router>
    <Routes>
      {routes.map((route) => renderRoutes(route))}
     
    </Routes>
  </Router>
)
