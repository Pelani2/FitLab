import React from "react";
import "../../styles/AboutPageStyles.css";

export default function AboutPage() {
    return(
        <div className="about-container" >
            <h2>
                About us
            </h2>
            <div className="about-overview">
                <h3>
                    Overview
                </h3>
                <div className="wrapper">
                    <p>
                        At Island FitLab, we are dedicated to helping you achieve your fitness goals and live a healthy, active lifestyle. We are more than just a gym – we are a community of fitness enthusiasts, experts, and trainers who are passionate about transforming lives through exercise and wellness.
                    </p>
                    <p>
                        Our mission is to provide a welcoming and inclusive environment where individuals of all fitness levels can thrive. Whether you're a beginner taking your first steps towards fitness or an experienced athlete looking to take your training to the next level, we have the tools, expertise, and support to guide you on your fitness journey.
                    </p>
                    <p>
                        With state-of-the-art facilities, cutting-edge equipment, and a wide range of fitness programs, we offer a comprehensive approach to fitness. From strength training and cardio workouts to group classes and personalized training sessions, our diverse offerings cater to various interests and fitness preferences.
                    </p>
                </div>
            </div>

            <div className="about-overview">
                <h3>
                    History
                </h3>
                <div className="wrapper">
                    <p>
                        Island FitLab has a rich history rooted in a passion for fitness and a commitment to community well-being. Founded in [year], our gym was born out of a vision to create a space where individuals could pursue their fitness goals in a supportive and inspiring environment.
                    </p>
                    <p>
                        From humble beginnings, Island FitLab grew steadily, attracting fitness enthusiasts of all ages and backgrounds. Our commitment to delivering exceptional services, personalized attention, and a diverse range of fitness programs propelled our growth and earned us a reputation as a leading fitness destination in the community.
                    </p>
                    <p>
                        From humble beginnings, Island FitLab grew steadily, attracting fitness enthusiasts of all ages and backgrounds. Our commitment to delivering exceptional services, personalized attention, and a diverse range of fitness programs propelled our growth and earned us a reputation as a leading fitness destination in the community.
                    </p>
                </div>
            </div>

            <div className="about-overview">
                <h3>
                    Recognition
                </h3>
                <div className="wrapper">
                    <p>
                        Outstanding Fitness Programs:

                        Commended for our innovative and diverse fitness programs that cater to all fitness levels and goals
                        Recognition for our specialized training programs, including strength and conditioning, group fitness classes, and personal training
                    </p>
                    <p>
                        Exceptional Customer Service:

                        Acknowledgment for our friendly and knowledgeable staff who go above and beyond to provide personalized attention and support to our members
                        Appreciation for our commitment to creating a welcoming and inclusive atmosphere where everyone feels comfortable and motivated
                    </p>
                    <p>
                        Community Engagement:

                        Recognition for our active involvement in community events, charity fundraisers, and partnerships with local organizations promoting health and wellness
                        Appreciation for our efforts to promote fitness awareness and inspire individuals to adopt healthier lifestyles
                    </p>
                </div>
            </div>
        </div>
    );
}