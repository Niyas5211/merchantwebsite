import { ArrowRight, Sparkles } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="badge glass-card">
                    <Sparkles size={16} className="text-gradient" />
                    <span>Next-Gen Virtual Try-On</span>
                </div>
                <h1 className="hero-title">
                    Experience Fashion <br />
                    <span className="text-gradient">Before You Buy</span>
                </h1>
                <p className="hero-subtitle">
                    Discover a new way to shop. Use our advanced AI fitting room to see how
                    clothes look on you instantly before making a purchase.
                </p>
                <div className="hero-actions">
                    <button className="btn btn-primary">
                        Start Shopping <ArrowRight size={20} />
                    </button>
                    <button className="btn btn-secondary">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="hero-image-container">
                <div className="hero-image-placeholder glass-card">
                    <div className="floating-element el-1 glass-card">Perfect Fit</div>
                    <div className="floating-element el-2 glass-card">AI Powered</div>
                    <img
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Fashion Model"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
