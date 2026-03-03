import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card glass-card">
            <div className="product-image-container">
                <Link to={`/product/${product.id}`} className="product-image-link">
                    <img src={product.image} alt={product.name} className="product-image" />
                </Link>
                <button className="wishlist-btn" aria-label="Add to Wishlist">
                    <Heart size={20} />
                </button>
                <div className="try-on-badge text-gradient">
                    <Star size={12} fill="#6366f1" /> Try-On Available
                </div>
            </div>

            <div className="product-info">
                <div className="product-category">{product.category}</div>
                <Link to={`/product/${product.id}`} className="product-title-link">
                    <h3 className="product-title">{product.name}</h3>
                </Link>

                <div className="product-footer">
                    <div className="product-price">${product.price.toFixed(2)}</div>
                    <button className="add-to-cart-btn btn-primary" aria-label="Add to Cart">
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
