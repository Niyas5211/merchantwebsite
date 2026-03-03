import ProductCard from './ProductCard';
import './RecommendationSystem.css';
import { Sparkles } from 'lucide-react';

const MOCK_RECOMMENDATIONS = [
    {
        id: 'rec-1',
        name: 'Oversized Vintage Wash Denim Jacket',
        category: 'Outerwear',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 'rec-2',
        name: 'Classic Silk Blend Slip Dress',
        category: 'Dresses',
        price: 119.50,
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 'rec-3',
        name: 'Essential Knit Cropped Sweater',
        category: 'Tops',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 'rec-4',
        name: 'Tailored Wide Leg Trousers',
        category: 'Bottoms',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=400'
    }
];

const RecommendationSystem = () => {
    return (
        <section className="recommendation-section">
            <div className="section-header">
                <h2 className="section-title">
                    <Sparkles className="text-gradient" size={28} />
                    Recommended For You
                </h2>
                <p className="section-subtitle">Based on your recent viewing history and preferences</p>
            </div>

            <div className="recommendations-grid">
                {MOCK_RECOMMENDATIONS.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default RecommendationSystem;
