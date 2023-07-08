import React, { useState } from "react";

export default function ApplyNowPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null);
    const [message, setMessage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleResumeChange = (event) => {
        setResume(event.target.files[0]);
    };

    const handleCoverLetterChange = (event) => {
        setCoverLetter(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        setMessage("Your application has been submited");
    };

    return(
        <div>

        </div>
    );
}