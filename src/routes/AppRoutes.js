import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import React from "react";
import DescriptionPage from "../pages/descriptionPage/DescriptionPage";
import LogInPage from "../pages/LogInPage/LogInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import InfoPage from "../pages/infoPage/InfoPage";
import NeedHelpPage from "../pages/needHelpPage/NeedHelpPage";
import ContentGuidePage from "../pages/contentGuidePage/ContentGuidePage";
import TermsOfUsePage from "../pages/termsOfUsePage/TermsOfUsePage";
import JobsPage from "../pages/jobsPage/JobsPage";
import ApplyNowPage from "../pages/applyNowPage/ApplyNowPage";
import PersonalTrainingPage from "../pages/personalTrainingPage/PersonalTrainingPage";
import GroupFitnessClasses from "../pages/groupFitnessClasses/GroupFitnessClasses";
import StrengthAndConditioningPage from "../pages/strengthAndConditioning/StrengthAndConditioningPage";
import CardiovascularTrainingPage from "../pages/cardiovascularTrainingPage/CardiovascularTrainingPage";
import YogaAndPilates from "../pages/yogaAndPilates/YogaAndPilates";
import Nutrition from "../pages/nutrition/Nutrition";

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
    },
    {
        path: "/infopage",
        element: <InfoPage />
    },
    {
        path: "/needhelppage",
        element: <NeedHelpPage />
    },
    {
        path: "/contentguidepage",
        element: <ContentGuidePage />
    },
    {
        path: "/termsofusepage",
        element: <TermsOfUsePage />
    },
    {
        path: "/jobspage",
        element: <JobsPage />
    },
    {
        path: "/applynowpage",
        element: <ApplyNowPage />
    },
    {
        path: "/personaltrainingpage",
        element: <PersonalTrainingPage />
    },
    {
        path: "/groupfitnesspage",
        element: <GroupFitnessClasses />
    },
    {
        path: "/strengthandconditioningpage",
        element: <StrengthAndConditioningPage />
    },
    {
        path: "/cardiovasculartrainingpage",
        element: <CardiovascularTrainingPage />
    },
    {
        path: "/yogapilatespage",
        element: <YogaAndPilates />
    },
    {
        path: "/nutritioncounselingpage",
        element: <Nutrition />
    }
]);

export default AppRoutes;