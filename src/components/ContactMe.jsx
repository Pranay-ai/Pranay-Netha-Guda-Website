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
        <div className="h-screen flex items-center justify-center ">
            {nameField !== "NoName" ? (
                <h1 className="text-2xl font-bold">Thank You {nameField}!</h1>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-fit md:h-2/3 items-center gap-4 p-6 justify-evenly bg-white shadow-lg rounded-md w-96">
                    <h1 className="text-3xl font-bold">Ping Me!</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Message"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-2 bg-green-300 text-black font-bold rounded-md hover:bg-dark-sage-green"
                    >
                        Send
                    </button>
                </form>
            )}
        </div>
    );
}

