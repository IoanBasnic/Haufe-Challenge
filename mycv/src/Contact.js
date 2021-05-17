import React from "react";

function Contact() {
    const handleSubmit = event => {
        console.log(event);
        event.preventDefault();
        alert('You have submitted the form.')
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
                                    <p>Email</p>
                                    <input name="email" />
                                </label>
                                 </div>
                                <div className="form-group">
                                <label>
                                    <p>Message</p>
                                    <textarea name="message" />
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
