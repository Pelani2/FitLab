import React from "react";
import "../../styles/ImageSectionStyles.css";
import OrangeStar from "../../assets/images/icons/orangeStar.png";
import Card from "../../components/card/Card";
import MattFlexwell from "../../assets/images/person2.jpg";
import AvaSwiftfit from "../../assets/images/person3.jpg";
import MaxStronghold from "../../assets/images/person1.jpg";

export default function ImageSection()  {
    return(
        <section className="card" >
            <div className="card__wrapper" >
                <Card 
                    name="Max Stronghold"
                    personality="A powerhouse at Fit Lab, embodies strength and dedication, inspiring others with his unwavering commitment to fitness."
                    job="Fitness coach, leverages his immense strength and knowledge to guide and motivate gym-goers in achieving their fitness goals."
                    image={MaxStronghold}
                    ratingStar={OrangeStar}
                />
            </div>

            <div className="card__wrapper">
                <Card 
                    name="Matt Flexwell"
                    personality="A fitness enthusiast at Fit Lab, impresses with his exceptional flexibility and graceful movements, inspiring others with his dedication."
                    job="The Mobility Trainer at Fit Lab, specializes in enhancing clients' range of motion and functional movement capabilities."
                    image={MattFlexwell}
                    ratingStar={OrangeStar}
                />
            </div>

            <div className="card__wrapper">
                <Card 
                    name="Ava Swiftfit"
                    personality="Ava Swiftfit, a powerhouse at Fit Lab, impresses with her exceptional speed and agility, inspiring others with her unstoppable drive."
                    job="The Cardio Conditioning Specialist at Fit Lab, utilizes her expertise to design dynamic and challenging cardio workouts for gym members."
                    image={AvaSwiftfit}
                    ratingStar={OrangeStar}
                />
            </div>
        </section>
    );
}