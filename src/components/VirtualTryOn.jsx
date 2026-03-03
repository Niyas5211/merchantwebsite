import { useState } from 'react';
import { Upload, X, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import './VirtualTryOn.css';

const VirtualTryOn = ({ productImage }) => {
    const [userImage, setUserImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserImage(reader.result);
                setError('');
                setResultImage(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTryOn = async () => {
        if (!userImage) return;

        setIsProcessing(true);
        setError('');

        try {
            // TODO: Replace with actual RapidAPI call integrating Virtual Try-On
            // Mock API call delay
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Mock response - returning userImage just for visual feedback until API is connected
            setResultImage(userImage);
        } catch (err) {
            setError('Failed to process image. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="virtual-try-on glass-card">
            <div className="vto-header">
                <h3><Sparkles size={20} className="text-gradient" /> AI Virtual Try-On</h3>
                <p>See how it looks on you before buying</p>
            </div>

            <div className="vto-workspace">
                <div className="vto-column">
                    <div className="vto-image-box">
                        <img src={productImage} alt="Product" className="vto-img" />
                        <div className="vto-label">Garment</div>
                    </div>
                </div>

                <div className="vto-column">
                    <div className={`vto-image-box ${!userImage ? 'empty' : ''}`}>
                        {userImage ? (
                            <>
                                <img src={userImage} alt="User" className="vto-img" />
                                <button
                                    className="clear-btn"
                                    onClick={() => { setUserImage(null); setResultImage(null); }}
                                >
                                    <X size={16} />
                                </button>
                            </>
                        ) : (
                            <label className="upload-placeholder">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden-input"
                                />
                                <Upload size={32} />
                                <span>Upload your photo</span>
                            </label>
                        )}
                        <div className="vto-label">You</div>
                    </div>
                </div>

                {resultImage && (
                    <div className="vto-column result-col">
                        <div className="vto-image-box result">
                            <img src={resultImage} alt="Result" className="vto-img" />
                            <div className="vto-label success text-gradient">Result</div>
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <div className="vto-error">
                    <AlertCircle size={16} /> {error}
                </div>
            )}

            <div className="vto-actions">
                <button
                    className="btn btn-primary vto-btn"
                    onClick={handleTryOn}
                    disabled={!userImage || isProcessing}
                >
                    {isProcessing ? (
                        <><Loader2 size={20} className="spin" /> Processing...</>
                    ) : (
                        'Generate Try-On'
                    )}
                </button>
            </div>
        </div>
    );
};

export default VirtualTryOn;
