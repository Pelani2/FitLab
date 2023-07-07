import React from "react";
import "../../styles/TermsOfUseStyles.css";

export default function TermsOfUsePage() {
    return(
        <div className="terms-of-use" >
            <h1>
                Terms of Use
            </h1>
            <p>
                Welcome to our Website, please read terms of use carefully.
            </p>
            <div className="terms-of-use__content" >
                <h3 className="terms-of-use__title">
                    Membership and Access
                </h3>
                <p className="terms-of-use__desc" >
                    1.1. To access Island FitLab, you must be a registered member or have obtained a valid guest pass.
                    1.2. Membership or guest passes are non-transferable and can only be used by the registered individual.
                    1.3. You must be at least 16 years old to become a member. If you are under 18, a parent or guardian's consent is required.
                    1.4. Members must present a valid ID when requested by the staff.
                </p>
            </div>
            <div className="terms-of-use__content" >
                <h3 className="terms-of-use__title">
                    Facility Usage
                </h3>
                <p className="terms-of-use__desc" >
                    2.1. Island FitLab facilities must be used in accordance with all applicable laws and regulations.
                    2.2. Respect other members and the staff. Use appropriate language and refrain from any form of harassment or discrimination.
                    2.3. Follow all safety instructions, rules, and guidelines posted within the gym.
                    2.4. Report any faulty equipment or potential hazards to the staff immediately.
                    2.5. Island FitLab is not responsible for any loss, theft, or damage to personal belongings.
                </p>
            </div>
            <div className="terms-of-use__content" >
                <h3 className="terms-of-use__title">
                    Health and Safety
                </h3>
                <p className="terms-of-use__desc" >
                    3.1. Prior to engaging in any physical activities, consult with a healthcare professional to determine your fitness level and capability.
                    3.2. You are responsible for ensuring your own physical well-being during your workouts.
                    3.3. Island FitLab recommends obtaining appropriate medical insurance coverage.
                    3.4. In the event of an injury or medical emergency, seek immediate assistance and notify the staff.
                </p>
            </div>
            <div className="terms-of-use__content" >
                <h3 className="terms-of-use__title">
                    Personal Conduct
                </h3>
                <p className="terms-of-use__desc" >
                    4.1. Proper attire, including athletic footwear, must be worn at all times.
                    4.2. Maintain personal hygiene and cleanliness. Use towels and wipes provided to clean equipment after use.
                    4.3. Refrain from engaging in any disruptive or unsafe behavior that may disturb other members or interfere with their workout.
                    4.4. Island FitLab reserves the right to refuse entry or terminate the membership of anyone violating these terms or engaging in inappropriate conduct.
                </p>
            </div>
            <div className="terms-of-use__content" >
                <h3 className="terms-of-use__title">
                    Membership Termination
                </h3>
                <p className="terms-of-use__desc" >
                    5.1. Island FitLab may terminate or suspend your membership if you violate these terms or engage in illegal activities.
                    5.2. Memberships can be canceled or suspended by providing written notice according to the terms outlined in your membership agreement.
                </p>
            </div>
            <div className="terms-of-use__content" >
                <h3 className="terms-of-use__title">
                    Privacy
                </h3>
                <p className="terms-of-use__desc" >
                    6.1. Island FitLab collects and processes personal information in accordance with its Privacy Policy.
                    6.2. By using Island FitLab, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.
                </p>
            </div>
            <div className="terms-of-use__content" >
                <h3 className="terms-of-use__title">
                    Amendments
                </h3>
                <p className="terms-of-use__desc" >
                    7.1. Island FitLab reserves the right to modify these Terms of Use at any time.
                    7.2. Any changes will be effective immediately upon posting on the Island FitLab website or notifying members through other reasonable means.
                    7.3. Your continued use of Island FitLab after changes have been made signifies your acceptance of the modified terms.
                </p>
            </div>
        </div>
    );
}