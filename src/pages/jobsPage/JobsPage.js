import React from "react";
import "../../styles/JobsStyles.css";
import ApplyNowButton from "../../components/buttons/applyNowButton/ApplyNowButton";

export default function JobsPage() {
    return(
        <div className="jobs-container" >
            <h1>
                Available Job Positions
            </h1>
            <div className="job-item" >
                <h3>
                    Job Position
                </h3>
                <p>
                    Ullamco incididunt anim proident minim in occaecat consequat in sit duis cupidatat.Eiusmod qui velit cupidatat do dolore eu incididunt.
                </p>
                <ApplyNowButton text="Apply Now" />
            </div>
        </div>
    );
}