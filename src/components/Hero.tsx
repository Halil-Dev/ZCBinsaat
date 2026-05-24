'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data';

import { urlFor } from '../sanity/lib/client';

interface HeroProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slides?: Record<string, any>[];
}

export default function Hero({ slides }: HeroProps) {
  const { language, t, th } = useLanguage();
  
  // Prepare slides from Sanity or fall back to static data
  const activeSlides = useMemo(() => {
    return (slides && slides.length > 0) ? slides.map((slide, idx) => {
      // Map Sanity fields to expected keys
      let imageUrl = '';
      try {
        imageUrl = slide.image ? urlFor(slide.image).url() : '/assets/hero_1.png';
      } catch {
        imageUrl = '/assets/hero_1.png';
      }
      
      return {
        image: imageUrl,
        tag: slide[`tag${language}`] || slide.tagTR || '',
        title: slide[`title${language}`] || slide.titleTR || '',
        desc: slide[`desc${language}`] || slide.descTR || '',
        // Define button actions dynamically
        btnPrimaryLink: idx === 0 ? '#contact' : '#catalog',
        btnPrimaryText: idx === 0 ? t('menuContact') : t('menuCatalog'),
        btnOutlineLink: idx === 0 ? '#catalog' : '#gallery',
        btnOutlineText: idx === 0 ? t('menuCatalog') : t('menuGallery'),
      };
    }) : siteData.heroSlides.map((slide, idx) => ({
      image: slide.image,
      tag: th(slide.tagKey),
      title: th(slide.titleKey),
      desc: th(slide.descKey),
      btnPrimaryLink: idx === 0 ? '#contact' : '#catalog',
      btnPrimaryText: th(slide.btnPrimaryKey),
      btnOutlineLink: idx === 0 ? '#catalog' : '#gallery',
      btnOutlineText: th(slide.btnOutlineKey),
    }));
  }, [slides, language, t, th]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = 6000; // 6 seconds per slide

  const startSlider = useCallback(() => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
    startTimeRef.current = performance.now();
    
    const updateProgress = () => {
      if (startTimeRef.current === null) return;
      const elapsed = performance.now() - startTimeRef.current;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (elapsed < duration) {
        timerRef.current = requestAnimationFrame(updateProgress);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSlides.length);
        setProgress(0);
      }
    };

    timerRef.current = requestAnimationFrame(updateProgress);
  }, [activeSlides.length]);

  useEffect(() => {
    startSlider();
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [currentIndex, startSlider]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activeSlides.length) % activeSlides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSlides.length);
    setProgress(0);
  };

  return (
    <section className="hero-section">
      <div className="slider-container">
        {activeSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            {/* Overlay background filter */}
            <div className="menu-bg-accent" style={{ opacity: 0.4, transform: 'none' }}></div>
            <div className="slide-content-wrapper">
              <div className="slide-content">
                <span className="slide-tag">{slide.tag}</span>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-desc">{slide.desc}</p>
                <div className="slide-actions">
                  <a href={slide.btnPrimaryLink} className="btn btn-primary btn-glow">
                    {slide.btnPrimaryText}
                  </a>
                  <a href={slide.btnOutlineLink} className="btn btn-outline">
                    {slide.btnOutlineText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button className="slider-arrow prev-arrow" onClick={handlePrev} aria-label="Previous Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="slider-arrow next-arrow" onClick={handleNext} aria-label="Next Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Hero Footer */}
      <div className="hero-footer">
        <div className="slider-progress-wrapper">
          <span className="slider-counter">
            {String(currentIndex + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
          </span>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="scroll-cue">
          <span className="scroll-text">{t('scrollDown')}</span>
          <div className="scroll-line"></div>
        </div>

        <div className="floating-widgets">
          <a href="#contact" className="widget-btn virtual-tour-btn">
            <svg style={{ marginRight: '8px' }} width="20" height="20" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a1 1 0 0 1 .707.293l2.853 2.853A.5.5 0 0 0 16 13.793V2a1 1 0 0 0-1-1H2z"/>
            </svg>
            <span>{t('menuContact')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
