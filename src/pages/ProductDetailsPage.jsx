import { useParams } from 'react-router-dom';
import { ShoppingBag, Heart, Shield, Truck, RotateCcw } from 'lucide-react';
import RatingSystem from '../components/RatingSystem';
import VirtualTryOn from '../components/VirtualTryOn';
import RecommendationSystem from '../components/RecommendationSystem';
import './ProductDetailsPage.css';

// Mock database
const MOCK_PRODUCT = {
    id: '1',
    name: 'Premium Essential T-Shirt',
    price: 35.00,
    description: 'Crafted from 100% organic cotton, this essential t-shirt offers unparalleled comfort and a perfect drape. The breathable fabric and tailored fit make it a versatile wardrobe staple for any occasion.',
    category: 'Tops',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600'
};

const ProductDetailsPage = () => {
    const { id } = useParams();

    // In a real app we'd fetch product by id here
    const product = MOCK_PRODUCT;

    return (
        <div className="product-details-page">
            <div className="pd-grid">
                <div className="pd-visuals">
                    <div className="pd-image-wrapper glass-card">
                        <img src={product.image} alt={product.name} className="pd-main-image" />
                    </div>
                    <VirtualTryOn productImage={product.image} />
                </div>

                <div className="pd-info">
                    <div className="pd-breadcrumbs text-gradient">
                        Home / {product.category} / {product.name}
                    </div>
                    <h1 className="pd-title">{product.name}</h1>

                    <div className="pd-rating-block">
                        <RatingSystem initialRating={product.rating} totalReviews={product.reviews} readOnly />
                    </div>

                    <div className="pd-price">${product.price.toFixed(2)}</div>

                    <p className="pd-description">{product.description}</p>

                    <div className="pd-variants">
                        <div className="variant-group">
                            <label>Size</label>
                            <div className="size-selector">
                                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                    <button key={size} type="button" className="size-btn">{size}</button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pd-actions">
                        <button className="btn btn-primary btn-large">
                            <ShoppingBag size={20} /> Add to Cart
                        </button>
                        <button className="btn btn-secondary btn-icon" aria-label="Add to Wishlist">
                            <Heart size={20} />
                        </button>
                    </div>

                    <div className="pd-perks glass-card">
                        <div className="perk">
                            <Truck size={20} className="text-gradient" />
                            <span>Free Express Shipping</span>
                        </div>
                        <div className="perk">
                            <RotateCcw size={20} className="text-gradient" />
                            <span>30-Day Free Returns</span>
                        </div>
                        <div className="perk">
                            <Shield size={20} className="text-gradient" />
                            <span>2-Year Warranty</span>
                        </div>
                    </div>
                </div>
            </div>

            <RecommendationSystem />
        </div>
    );
};

export default ProductDetailsPage;
