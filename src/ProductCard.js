import React, { useState } from 'react';
import './ProductCard.css';
import { FaWhatsapp } from 'react-icons/fa';

// ✅ Imagens reais da pasta public/images
const images = [
  '/images/GLOCK-1.jpeg',
  '/images/GLOCK-2.jpeg',
  '/images/GLOCK-3.jpeg',
  '/images/GLOCK-4.jpeg',
  '/images/GLOCK-5.jpeg',
  '/images/GLOCK-6.jpeg',
];

function ProductCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="product-card-container">
      <div className="product-image-section">
        <button className="slider-button left-arrow" onClick={goToPreviousImage}>
          &#8249;
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Imagem ${currentImageIndex + 1} da Pistola`}
          className="product-image"
        />
        <button className="slider-button right-arrow" onClick={goToNextImage}>
          &#8250;
        </button>
        <div className="magnify-icon">&#128269;</div>
      </div>

      <div className="product-details-section">
        <h2 className="product-title">Pistola Taurus TH9 Cal. 9mm</h2>
        <p className="product-description">
          Pistola Taurus TH9 9mm seminova, com pouquíssimos disparos e alto desempenho.
          Acompanha 3 carregadores Mec-Gar (17+1), 18 munições e 2 conjuntos completos
          de coldres e porta-carregadores em Kydex (Sabre e Invictus). Brindes avaliados
          em R$1.200. Excelente oportunidade!
        </p>
        <div className="product-prices">
          <span className="struck-price">R$7.500,00</span>
          <span className="current-price">R$5.750,00</span>
        </div>
        {/* Changed from <button> to <a> tag with href and target="_blank" */}
        <a 
          href="https://wa.me/message/WQS3YHS6QHS2I1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-button"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Entre em contato
        </a>
      </div>
    </div>
  );
}

export default ProductCard;