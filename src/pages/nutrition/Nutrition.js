import React, { useState } from "react";
import "../../styles/NutritionStyles.css";
import CloseButton from "../../components/buttons/closeButton/CloseButton";
import JohnSmith from "../../assets/images/nutritionists/john-smith.jpg";
import MichaelBrown from "../../assets/images/nutritionists/john-smith.jpg";
import JaneJohnson from "../../assets/images/nutritionists/jane-johnson.jpg";
import SarahDavis from "../../assets/images/nutritionists/sarah-davis.jpg";
import AmyThompson from "../../assets/images/nutritionists/amy-thompson.jpg"

export default function Nutrition() {
    const [selectedNutritionist, setSelectedNutritionist] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleNutritionistClick = (nutritionist) => {
        setSelectedNutritionist(nutritionist);
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    const nutritionists = [
        {
            name: "John Smith, PD",
            image: JohnSmith, 
            info: "John Smith is a registered dietitian with expertise in helping individuals achieve their health goals through personalized nutrition plans. With over 10 years of experience, John specializes in weight management, cardiovascular health, and sports nutrition. He believes in a holistic approach to nutrition and focuses on educating his clients about making sustainable lifestyle changes.",
        },
        {
            name: "Michael Brown, RDN",
            image: MichaelBrown, 
            info: "Michael Brown is a registered dietitian and nutritionist who specializes in sports nutrition and performance. He has worked with professional athletes, helping them achieve peak performance through customized nutrition strategies. Michael is dedicated to maximizing athletic potential, enhancing recovery, and preventing injuries through optimized nutrient intake and hydration protocols."
        },
        {
            name: "Jane Johnson, MS, CNS",
            image: JaneJohnson,
            info: "Jane Johnson is a certified nutrition specialist with a Master's degree in Nutrition. Her passion lies in helping people optimize their well-being through proper nutrition. Jane has a deep understanding of the relationship between food and health conditions such as diabetes, gastrointestinal disorders, and autoimmune diseases. She empowers her clients to make informed food choices and develop personalized meal plans tailored to their unique needs."
        },
        {
            name: "Sarah Davis, CDE",
            image: SarahDavis,
            info: "Sarah Davis is a certified diabetes educator and nutritionist. She has a comprehensive understanding of diabetes management and offers guidance on maintaining stable blood sugar levels, meal planning, and lifestyle modifications. Sarah works closely with individuals with diabetes to help them develop healthy eating habits, incorporate physical activity, and optimize their overall well-being.",
        },
        {
            name: "Amy Thompson, LD",
            image: AmyThompson,
            info: "Sarah Davis is a certified diabetes educator and nutritionist. She has a comprehensive understanding of diabetes management and offers guidance on maintaining stable blood sugar levels, meal planning, and lifestyle modifications. Sarah works closely with individuals with diabetes to help them develop healthy eating habits, incorporate physical activity, and optimize their overall well-being.",
        }
    ];

    const benefitsOfNutrition = [
        "Customized guidance based on individual needs and goals",
        "Education on proper nutrition and healthy eating habits",
        "Support for managing medical conditions through diet",
        "Weight management and body composition improvement",
        "Enhanced sports performance through tailored nutrition plans",
        "Improved overall health and well-being",
    ];

    const expectations = [
        "Review of your medical history, current diet, and lifestyle",
        "Detailed assessment of your nutritional needs",
        "Setting realistic goals and developing an action plan",
        "Monitoring progress and making necessary adjustments",
        "Evidence-based advice and practical tips for healthy eating",
        "Support, motivation, and accountability throughout the process"
    ];

    return(
        <div className="nutrition__background"> 
            <div className="nutrition">
                <h1 className="nutrition__title">
                    Nutrition Counseling
                </h1>
                <p className="nutrition__desc">
                    Welcome to the Nutrition Counseling page! Here you'll find information
                    and guidance on achieving a balanced and healthy diet through
                    personalized counseling sessions.
                </p>
    
                <h2 className="nutrition__title">
                    What is Nutrition Counseling?
                </h2>
                <p className="nutrition__desc">
                    Nutrition counseling is a process where a qualified nutritionist or
                    dietitian provides personalized guidance and support to help individuals
                    make informed decisions about their diet and lifestyle. It involves
                    assessing dietary needs, setting goals, and developing strategies to
                    achieve optimal health and well-being.
                </p>
    
                <h2 className="nutrition__title">
                    Benefits of Nutrition Counseling
                </h2>
                <ul className="nutirition__list">
                    {benefitsOfNutrition.map(benefit => (
                        <li 
                            key={benefit}
                            className="nutrition__list-item"
                        >
                            {benefit}
                        </li>
                    ))}
                </ul>
    
                <h2 className="nutrition__title">
                    What to Expect in a Counseling Session
                </h2>
                <p className="nutrition__desc">
                    During a nutrition counseling session, you can expect the following:
                </p>
                <ul className="nutirition__list">
                {expectations.map(expectation => (
                    <li 
                        key={expectation} 
                        className="nutrition__list-item"
                    >
                        {expectation}
                    </li>
                ))}
                </ul>
    
                <h2 className="nutrition__title">
                    Is Nutrition Counseling Right for You?
                </h2>
                <p className="nutrition__desc">
                    Nutrition counseling can benefit anyone looking to improve their diet, manage specific health conditions, or optimize their athletic performance. Whether you want to lose weight, manage diabetes, improve digestion, or simply adopt healthier eating habits, a nutritionist or dietitian can provide expert guidance and support tailored to your
                    unique needs.
                </p>

                <h2 className="nutrition__title">
                    Our top nutritionists
                </h2>
                <p className="nutrition__desc">
                    If you're looking for exceptional nutrition counseling services, consider consulting with one of these highly recommended nutritionists at Island Fitlab:
                </p>
                <ul className="nutirition__list ">
                    {nutritionists.map((nutritionist, index) => (
                        <li
                            key={index}
                            className="nutrition__list-item nutritionists"
                            onClick={() => handleNutritionistClick(nutritionist.name)}
                        >
                            {nutritionist.name}
                        </li>
                    ))}
                </ul>
                <p className="nutrition__desc">
                    These nutritionists have a wealth of experience and expertise in providing personalized nutrition counseling to help you reach your health and wellness goals.
                </p>

                {isPopupOpen && selectedNutritionist && (
                    <div className="nutrition__popup-container">
                        <div className="nutrition__popup-div">
                        <h3>
                            {selectedNutritionist}
                        </h3>
                        <p>
                            {nutritionists.find(nutritionist => nutritionist.name === selectedNutritionist)?.info}
                        </p>
                        <CloseButton 
                            text="Close"
                            closeFunc={closePopup}
                        />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}