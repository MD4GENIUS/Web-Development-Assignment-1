import React from 'react';
import './index.css'; 

export default function Contact() {
    return (
        <>
            <main>
                <h2 id='contacth2'>Contact Information</h2>
                <form id="ffp">
                    <label className="contactblock" htmlFor="name">Your First and Last Name:</label>
                    <input className="inputField" id="name" type="text" name="name" />
                    
                    <label className="contactblock" htmlFor="Phone">Phone Number:</label>
                    <input className="inputField" id="Phone" type="text" name="Phone" />
                    
                    <label className="contactblock" htmlFor="Email">Email:</label>
                    <input className="inputField" id="Email" type="text" name="Email" />
                    
                    <fieldset>
                        <label className="contactblock" htmlFor="comment">Any Comments?:</label>
                        <textarea className="textArea" id="comments" name="comments" cols="150" rows="10"></textarea>
                    </fieldset>
                    
                    <div className="buttonContainer">
                        <input className="submitButton" type="submit" value="Submit" />
                        <input className="resetButton" type="reset" value="Reset" />
                    </div>
                </form>
            </main>
        </>
    );
}
