import './Contact.css'

const Contact = () =>{
    return (
        <div className="contact">
            <br />
            <br />
            <p id='con'>Contact Us on</p>
            <br />
            <br />
            <br />
            <div className="mainpkt">
                <div className="call">
                <i class="fa-2x fa-solid fa-phone "></i>
                <p>+91 xxxxxxxxxx</p>
                </div>
                <div className="mail">
                <i class="fa-2x fa-regular fa-envelope "></i>
                <p>xyz@gmail.com</p>
                </div>
                
            </div>
        </div>
    );
}
export default Contact