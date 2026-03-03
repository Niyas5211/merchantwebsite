import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar glass-card">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="text-gradient font-bold">TryBeforeBuy</span>
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/catalog" className="nav-link">Catalog</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </div>

                <div className="navbar-actions">
                    <button className="icon-btn">
                        <User size={20} />
                    </button>
                    <button className="icon-btn">
                        <ShoppingBag size={20} />
                    </button>
                    <button className="icon-btn mobile-menu">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
