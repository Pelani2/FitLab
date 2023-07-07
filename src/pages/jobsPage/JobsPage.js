import React from "react";
import "../../styles/JobsStyles.css";
import ApplyNowButton from "../../components/buttons/applyNowButton/ApplyNowButton";
import { Link } from "react-router-dom";

export default function JobsPage() {
    return(
        <div className="jobs-container" >
            <h1>
                Available Job Positions
            </h1>
            <div className="job-item" >
                <h3>
                    Personal Trainer
                </h3>
                <p>
                    We are looking for a certified personal trainer to join our team at
                    Island FitLab. The ideal candidate should have experience in guiding
                    and motivating clients to achieve their fitness goals.
                </p>
                <Link to="/applynowpage" >
                    <ApplyNowButton text="Apply Now" />
                </Link>
            </div>

            <div className="job-item" >
                <h3>
                    Group Fitness Instructor
                </h3>
                <p>
                    Island FitLab is seeking a dynamic and energetic group fitness
                    instructor. Experience in leading various group fitness classes such
                    as Zumba, Yoga, or HIIT is preferred.
                </p>
                <Link to="/applynowpage" >
                    <ApplyNowButton text="Apply Now" />
                </Link>
            </div>

            <div className="job-item" >
                <h3>
                    Front Desk Receptionist
                </h3>
                <p>
                    We are hiring a friendly and organized front desk receptionist to
                    provide exceptional customer service at Island FitLab. Responsibilities
                    include greeting members, scheduling appointments, and handling inquiries.
                </p>
                <Link to="/applynowpage" >
                    <ApplyNowButton text="Apply Now" />
                </Link>
            </div>
        </div>
    );
}