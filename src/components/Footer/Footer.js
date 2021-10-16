import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">

            <section footer-address-container>

                <div> <p> CONTACT ADDRESS </p> </div>

                <div> <p> 29, Ogayemi Close, Oko-Agbon, Iwaya Yaba, Lagos </p>   </div>

            </section>


            <section className="footer-telephone-container">

                <div> <p> TELEPHONE </p> </div>

                <div> <p> +234-803-499-2318 </p> </div>

            </section>


            <section className="footer-email-container">

                <div> <p> E-MAIL </p> </div>
                <div>
                    <a href="#"> info@thewhy.ng </a>
                </div>

            </section>

            <hr />

            <aside className="footnote">
                Developed by Rtd Company
            </aside>

        </footer>
    )
}

export default Footer;
