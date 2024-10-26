import './Footer.css';

function Footer() {
    return (
        <footer id="footer">
            Follow us
            <div className="links">
            <span>
                <a href="https://www.facebook.com/ShopeePH" target="_blank" rel="noreferrer"> <i className="fa-brands fa-facebook"></i> Facebook </a>
            </span>

            <span>
                <a href="https://www.instagram.com/Shopee_PH/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-instagram"></i> Instagram
                </a>
            </span>

            <span>
                <a href="https://twitter.com/shopeeph" target="_blank" rel="noreferrer"> <i className="fa-brands fa-twitter"></i> Twitter
                </a>
            </span>

            <span>
                <a href="https://www.linkedin.com/company/shopee/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin"></i>
                LinkedIn
                </a>
            </span>
            </div>
            2024 All rights reserved.
        </footer>
    );
}

export default Footer;