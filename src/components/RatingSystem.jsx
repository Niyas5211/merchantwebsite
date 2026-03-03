import { useState } from 'react';
import { Star } from 'lucide-react';
import './RatingSystem.css';

const RatingSystem = ({ initialRating = 0, totalReviews = 0, readOnly = false }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    return (
        <div className={`rating-system ${readOnly ? 'read-only' : ''}`}>
            <div className="stars">
                {[...Array(5)].map((star, index) => {
                    const indexValue = index + 1;
                    return (
                        <button
                            type="button"
                            key={indexValue}
                            className={`star-btn ${indexValue <= (hover || rating) ? 'active' : ''}`}
                            onClick={() => !readOnly && setRating(indexValue)}
                            onMouseEnter={() => !readOnly && setHover(indexValue)}
                            onMouseLeave={() => !readOnly && setHover(rating)}
                            disabled={readOnly}
                        >
                            <Star
                                size={20}
                                fill={indexValue <= (hover || rating) ? "currentColor" : "none"}
                            />
                        </button>
                    );
                })}
            </div>
            <span className="review-count">
                {rating.toFixed(1)} {totalReviews > 0 ? `(${totalReviews} reviews)` : ''}
            </span>
        </div>
    );
};

export default RatingSystem;
