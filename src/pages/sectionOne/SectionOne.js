import React from "react";
import "../../styles/SectionOne.css";
import SectionOneButton from "../../components/buttons/sectionOnebutton/SectionOneButton";

export default function sectionOne(){ 
    return(
        <section className="section-one" >
            <h1 className="section-one__title" >
                Island FitLab
            </h1>
            <p className="section-one__desc" >
                Welcome to Island FitLab, where fitness meets paradise! Nestled on a breathtaking island surrounded by turquoise waters and swaying palm trees, our gym offers a unique and invigorating fitness experience like no other. Whether you're a local resident or a visitor seeking an escape from the ordinary, Island FitLab is here to help you achieve your health and wellness goals while immersing you in the beauty of our tropical oasis.
                <SectionOneButton text="Read more..." />
            </p>
        </section>
    );
}