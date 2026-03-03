import './Footer.css';
import { Camera, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer glass-card">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Camera className="text-gradient" size={24} />
                        <span className="text-gradient font-bold">TryBeforeBuy</span>
                    </div>
                    <p className="footer-desc">
                        Redefining online shopping with AI-powered virtual try-on technology.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h3>Shop</h3>
                        <a href="#">New Arrivals</a>
                        <a href="#">Bestsellers</a>
                        <a href="#">Categories</a>
                        <a href="#">Collections</a>
                    </div>

                    <div className="link-group">
                        <h3>Support</h3>
                        <a href="#">Contact Us</a>
                        <a href="#">Shipping & Returns</a>
                        <a href="#">FAQ</a>
                        <a href="#">Size Guide</a>
                    </div>

                    <div className="link-group">
                        <h3>Company</h3>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TryBeforeBuy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
