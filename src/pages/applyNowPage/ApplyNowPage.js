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
            <h1>
                Job Application
            </h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name" >
                        Name: 
                    </label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" >
                        Email: 
                    </label>
                    <input 
                        type="text"
                        id="name"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" >
                        Phone: 
                    </label>
                    <input 
                        type="text"
                        id="name"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="resume" >
                        Resume:
                    </label>
                    <input 
                        type="file"
                        id="resume"
                        value={resume}
                        onChange={handleResumeChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="coverLetter" >
                        Cover Letter:
                    </label>
                    <input 
                        type="file"
                        id="coverLetter"
                        value={coverLetter}
                        onChange={handleCoverLetterChange}
                        required
                    />
                </div>
                <button type="submit" >
                    Submit Application
                </button>
            </form>
        </div>
    );
}