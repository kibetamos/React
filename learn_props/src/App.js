import React from "react"
import Contact from "./components/Contact";
import './style.css';
/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">
            < Contact />
            <div className="contact-card">
                <img src="./images/fluffykins.png"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/felix.png"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/pumpkin.png"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default App