import React, { useState } from "react";
import  { db } from "./firebase";


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = event => {
        console.log(event);
        event.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        }).then(() => {
            alert('You have submitted the form.');
        }).catch( (error) => {
            alert(error.message);
        });
        setName("");
        setMessage("");
        setEmail("");
    }
    return(
        <div className="bef-wrapper">
            <div className="wrapper">
                <div className="row">
                    <div className="column">
                        <h1 className={"projectHeader"}>Contact me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>
                                        <p>Name</p>
                                        <input
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </label>
                                <label>
                                    <p>Email</p>
                                    <input
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                 </div>
                                <div className="form-group">
                                <label>
                                    <p>Message</p>
                                    <textarea
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </label>
                                </div>
                            <button className={"submitBtn"} type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="column">
                        <img src="https://i.ibb.co/PTf15Tt/undraw-Mail-sent-re-0ofv.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
