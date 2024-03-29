import { useRef, useState } from "react";

export default function ContactMe() {
    const nameRef = useRef();
    const [nameField, setName] = useState("NoName");

    function handleClick() {
        console.log(nameRef.current.value);
        const enteredName = nameRef.current.value;
        if (enteredName) {
            setName(enteredName);
        }
    }

    return (
        <div className="ContactSection">
            <div className="ContactMe">
                {nameField !== "NoName" ? (
                    <>
                        <h1>Thank You {nameField}!</h1>
                    </>
                ) : (
                    <>
                        <h1>Ping Me!</h1>
                        <input ref={nameRef} type="text" placeholder="Name" name="name" />
                        <input type="email" placeholder="Email" name="email" />
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <button onClick={handleClick}>Send</button>
                    </>
                )}
            </div>
        </div>
    );
}
