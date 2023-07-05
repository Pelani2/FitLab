import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import React from "react";
import DescriptionPage from "../pages/descriptionPage/DescriptionPage";
import LogInPage from "../pages/LogInPage/LogInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/descriptionpage",
        element: <DescriptionPage />
    },
    {
        path: "/loginpage",
        element: <LogInPage />
    },
    {
        path: "/signuppage",
        element: <SignUpPage />
    },
    {
        path: "/aboutpage",
        element: <AboutPage />
    },
    {
        path: "/contactpage",
        element: <ContactPage />
    }
]);

export default AppRoutes;