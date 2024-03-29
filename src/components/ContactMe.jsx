import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactMe() {
    const [nameField, setName] = useState("NoName");

    function handleSubmit(e) {
        e.preventDefault();
        const enteredName = e.target.name.value;
        if (enteredName) {
            setName(enteredName);
        }

        emailjs.send("service_1nksqcl", "template_szw8787", {
            from_name: enteredName,
            to_name: "Pranay Netha",
            message: e.target.message.value,
            email_user: "gudapranaynetha@gmail.com",
            reply_to: e.target.email.value,
        }, '9333Ud1MPxOCys7Gn')
        .then((result) => {
            console.log('Email sent:', result.text);
        }, (error) => {
            console.log('Email error:', error.text);
        });
    }

    return (
        <div className="ContactSection">
            <div className="ContactMe">
                {nameField !== "NoName" ? (
                    <>
                        <h1>Thank You {nameField}!</h1>
                    </>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h1>Ping Me!</h1>
                        <input type="text" placeholder="Name" name="name" />
                        <input type="email" placeholder="Email" name="email" />
                        <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                )}
            </div>
        </div>
    );
}
