import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SectionOne from "../sectionOne/SectionOne";
import ImageSection from "../sectionOne/ImageSection";
import Gallery from "./gallery/Gallery";
import Footer from "./gallery/footer/Footer";

export default function HomePage() {
    return(
        <div>
            <Navbar />
            <SectionOne />
            <ImageSection />
            <Gallery />
            <Footer />
        </div>
    );
}