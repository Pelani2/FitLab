import React, { useState } from "react";
import "../../styles/CardiovascularTrainingPageStyles.css";
import YouTubeVideo from "../../videos/YouTubeVideo";

export default function CardiovascularTrainingPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    const handlePopupClose = () => {
        setSelectedItem(null);
    }

    return(
        <div className="cardiovascular-container" >
            <h1 className="cardiovascular-title" >
                Cardiovascular Training
            </h1>

            <div className="cardiovascular-section" >
                <h2 className="cardiovascular-section__title" >
                    What is Cardiovascular Training
                </h2>
                <p className="cardiovascular-section__description" >
                    Cardiovascular training, also known as cardio or aerobic exercise,
                    refers to physical activities that increase the heart rate and
                    breathing rate for a sustained period. It aims to improve the
                    efficiency of the cardiovascular system, including the heart, lungs,
                    and blood vessels.
                </p>
                <p className="cardiovascular-section__details" >
                    Regular cardiovascular training has numerous benefits for overall
                    health and fitness. It helps strengthen the heart, improves lung
                    capacity, increases endurance, and promotes weight loss. Cardiovascular
                    exercises can include activities such as running, swimming, cycling,
                    and dancing.
                </p>
            </div>

            <div className="cardiovascular-section">
                <h2 className="cardiovascular-section__title">
                    Benefits of Cardiovascular Training
                </h2>
                <p className="cardiovascular-section__description">
                    Engaging in regular cardiovascular training can provide various
                    benefits for both physical and mental well-being. Some of the key benefits include:
                </p>
                <ul className="cardiovascular-section__details">
                    <li onClick={() => handleItemClick("Improved cardiovascular health")} >
                        Improved Cardiovascular Health
                    </li>
                    <li onClick={() => handleItemClick("Increased stamina and endurance")} >
                        Increased stamina and endurance
                    </li>
                    <li onClick={() => handleItemClick("Weight loss managment")} >
                        Weight loss managment
                    </li>
                    <li onClick={() => handleItemClick("Reduced risk of chronic diseases")} >
                        Reduced risk of chronic diseases
                    </li>
                    <li onClick={() => handleItemClick("Enhanced mood and reduced stress")} >
                        Enhanced mood and reduced stress
                    </li>
                </ul>
            </div>
            
            <div className="cardiovascular-section" >
                <h2 className="cardiovascular-section__title">
                    Types of Cardiovascular Training
                </h2>
                <p className="cardiovascular-section__description">
                    There are various types of cardiovascular exercises that you can
                    incorporate into your fitness routine. Some popular options include:
                </p>
                <ul className="cardiovascular-section__details">
                    <li onClick={() => handleItemClick("Running or jogging")} >
                        Running or jogging
                    </li>
                    <li onClick={() => handleItemClick("Swimming")}>
                        Swimming
                    </li>
                    <li onClick={() => handleItemClick("Cycling")} >
                        Cycling
                    </li>
                    <li onClick={() => handleItemClick("Brisk walking")} >
                        Brisk walking
                    </li>
                    <li onClick={() => handleItemClick("Aerobic dance classes")} >
                        Aerobic dance classes
                    </li>
                    <li onClick={() => handleItemClick("HIIT")} >
                        HIIT "High-Intensity Interval Training"
                    </li>
                </ul>
                <p>
                    It's important to choose activities that you enjoy and that suit your fitness level and preferences. Remember to start gradually and gradually increase the intensity and duration of your workouts.
                </p>
            </div>
            {selectedItem && (
                <div className="cardiovascular-popup" >
                    <div className="cardiovascular-popup__content" >
                        <h3>
                            {selectedItem}
                        </h3>
                        {selectedItem === "Improved cardiovascular health" && (
                            <p>
                                Improved cardiovascular health refers to the positive enhancements in the overall functioning and well-being of the cardiovascular system, which includes the heart, blood vessels, and circulatory system. It encompasses various factors such as better heart function, lower blood pressure, reduced cholesterol levels, improved blood flow, and enhanced overall cardiovascular fitness. Achieving and maintaining improved cardiovascular health through a healthy lifestyle, regular exercise, a balanced diet, and appropriate medical care can significantly reduce the risk of heart disease, stroke, and other cardiovascular conditions, leading to a longer and healthier life.
                            </p>
                        )}
                        {selectedItem === "Increased stamina and endurance" && (
                            <p>
                                Increased stamina and endurance refer to the ability of an individual to sustain physical or mental effort over an extended period of time. It involves an improved capacity to engage in activities without experiencing excessive fatigue or diminished performance. Enhancing stamina and endurance is typically achieved through regular exercise and conditioning, which strengthen the cardiovascular system, increase muscle efficiency, and enhance oxygen utilization by the body. Improved stamina and endurance can have numerous benefits, such as better athletic performance, increased productivity, reduced fatigue, and an overall improved quality of life. Additionally, it can contribute to better cardiovascular health and help prevent chronic diseases by promoting an active and healthy lifestyle.
                            </p>
                        )}
                        {selectedItem === "Weight loss managment" && (
                            <p>   
                                Weight loss management refers to the process of adopting strategies and practices to achieve and maintain a healthy body weight. It involves a combination of healthy eating habits, regular physical activity, and behavior modifications aimed at creating a calorie deficit, where the energy expenditure exceeds the energy intake. Effective weight loss management also considers individual factors such as age, gender, metabolism, and any underlying health conditions.   
                            </p>
                        )}
                        {selectedItem === "Reduced risk of chronic diseases" && (
                            <p>
                                Reduced risk of chronic diseases refers to the lowered likelihood of developing long-term health conditions that persist over an extended period or progress slowly. Chronic diseases are often non-communicable and are associated with factors such as genetics, lifestyle choices, and environmental influences. Examples of common chronic diseases include heart disease, diabetes, certain types of cancer, respiratory diseases, and stroke.
                            </p>
                        )}
                        {selectedItem === "Enhanced mood and reduced stress" && (
                            <p>
                                Enhanced mood and reduced stress are interconnected aspects of mental well-being that can be improved through various strategies and practices. Here's a brief description of each:

                                Enhanced mood: Refers to an improved emotional state characterized by increased positivity, happiness, and overall well-being. Several factors contribute to enhancing mood, including:

                                Regular exercise: Physical activity stimulates the release of endorphins, which are natural mood-boosting chemicals in the brain. Engaging in regular exercise, such as aerobic activities or strength training, can improve mood and reduce symptoms of depression and anxiety.

                                Healthy diet: Consuming a balanced diet that includes nutrients like omega-3 fatty acids, B vitamins, and antioxidants has been linked to better mental health and improved mood. Incorporating foods like fatty fish, whole grains, fruits, and vegetables can support overall well-being.

                                Adequate sleep: Sufficient and quality sleep plays a vital role in regulating mood. Aim for 7-9 hours of uninterrupted sleep each night to promote emotional balance and cognitive function.

                                Reduced stress: Stress reduction involves managing and minimizing the negative impact of stress on mental and physical health. Some effective techniques include:

                                Relaxation techniques: Practices like deep breathing exercises, meditation, yoga, and mindfulness can help calm the mind, reduce stress hormones, and promote a sense of relaxation.
                            </p>
                        )}
                        {selectedItem === "Running or jogging" && (
                            <YouTubeVideo 
                                url="https://www.youtube.com/watch?v=N9C88z3g0Es"
                            />
                        )}
                        {selectedItem === "Swimming" && (
                            <YouTubeVideo 
                                url="https://www.youtube.com/watch?v=AfnwseOgxE0"
                            />
                        )}
                        {selectedItem === "Cycling" && (
                            <YouTubeVideo 
                                url="https://www.youtube.com/watch?v=cA1U68Wiil4"
                            />
                        )}
                        {selectedItem === "Brisk walking" && (
                            <YouTubeVideo 
                                url="https://www.youtube.com/watch?v=BENQ9RtSbm8"
                            />
                        )}
                        {selectedItem === "Aerobic dance classes" && (
                            <YouTubeVideo 
                                url="https://www.youtube.com/watch?v=rh4_HoVpiCY"
                            />
                        )}
                        {selectedItem === "HIIT" && (
                            <YouTubeVideo 
                                url="https://www.youtube.com/watch?v=dNJ2gG-Jud4"
                            />
                        )}
                        <button onClick={handlePopupClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}