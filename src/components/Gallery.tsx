'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteData, LanguageDictionary } from '../data';
import { urlFor } from '../sanity/lib/client';

type Category = 'all' | 'exterior' | 'interior' | 'social';

interface GalleryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any[];
}

export default function Gallery({ items }: GalleryProps) {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Map Sanity gallery items or fall back to static data
  const activeItems = useMemo(() => {
    return (items && items.length > 0) ? items.map((item, idx) => {
      let imageUrl = '';
      try {
        imageUrl = item.image ? urlFor(item.image).url() : '/assets/hero_1.png';
      } catch {
        imageUrl = '/assets/hero_1.png';
      }

      return {
        image: imageUrl,
        category: item.category || 'exterior',
        originalIndex: idx,
        translations: {
          TR: { title: item.titleTR || '', label: item.category === 'interior' ? 'İç Mekan' : item.category === 'social' ? 'Sosyal Alanlar' : 'Dış Mimari' },
          EN: { title: item.titleEN || '', label: item.category === 'interior' ? 'Interior' : item.category === 'social' ? 'Social Areas' : 'Exterior' },
          RU: { title: item.titleRU || '', label: item.category === 'interior' ? 'Интерьер' : item.category === 'social' ? 'Общественные зоны' : 'Экстерьер' }
        }
      };
    }) : siteData.galleryItems.map((item, idx) => ({
      ...item,
      originalIndex: idx
    }));
  }, [items]);

  // Filter gallery items
  const filteredItems = activeItems.filter(item => filter === 'all' || item.category === filter);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === 0 ? activeItems.length - 1 : prev! - 1
    );
  }, [lightboxIndex, activeItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      (prev! + 1) % activeItems.length
    );
  }, [lightboxIndex, activeItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  const activeLightboxItem = lightboxIndex !== null ? activeItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="sec-padding">
      <div className="container">
        
        {/* Section title */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">{t('menuGallery')}</span>
          <h2 className="section-title">{t('menuGallery')}</h2>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filter-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          {(['all', 'exterior', 'interior', 'social'] as Category[]).map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '0.95rem',
                fontWeight: '700',
                backgroundColor: filter === cat ? 'var(--color-accent)' : 'var(--color-light)',
                color: filter === cat ? 'var(--color-white)' : 'var(--color-dark)',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
            >
              {t(cat as keyof LanguageDictionary)}
            </button>
          ))}
        </div>

        {/* Gallery Grid Layout */}
        <div 
          className="gallery-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            gridAutoFlow: 'dense'
          }}
        >
          {filteredItems.map((item) => {
            const itemTrans = item.translations[language];
            return (
              <div
                key={item.originalIndex}
                className="gallery-item cursor-pointer"
                onClick={() => setLightboxIndex(item.originalIndex)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={item.image}
                  alt={itemTrans.title}
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="hover:scale-105"
                />
                
                {/* Visual hover card */}
                <div 
                  className="gallery-item-hover" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(46, 48, 59, 0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    padding: '2rem',
                    textAlign: 'center',
                    color: 'var(--color-white)'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {itemTrans.label}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0, color: 'var(--color-white)' }}>
                    {itemTrans.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeLightboxItem && (
        <div 
          className="lightbox active" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(23, 24, 30, 0.98)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            visibility: 'visible',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Close Button */}
          <button 
            className="lightbox-close" 
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              color: 'var(--color-white)',
              fontSize: '2rem',
              zIndex: 100
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Navigation controls */}
          <button 
            className="lightbox-arrow lightbox-prev" 
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '2rem',
              color: 'var(--color-white)',
              fontSize: '1.5rem',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            className="lightbox-arrow lightbox-next" 
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '2rem',
              color: 'var(--color-white)',
              fontSize: '1.5rem',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Center Contents */}
          <div className="lightbox-content" style={{ maxWidth: '80%', maxHeight: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={activeLightboxItem.image} 
              alt={activeLightboxItem.translations[language].title}
              style={{ maxWidth: '100%', maxHeight: '65vh', objectFit: 'contain', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            />
            
            {/* Specs at the bottom */}
            <div className="lightbox-caption" style={{ color: 'var(--color-white)', marginTop: '2rem', textAlign: 'center' }}>
              <span className="lightbox-category" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {t('lightboxCategory')}: {activeLightboxItem.translations[language].label}
              </span>
              <h3 className="lightbox-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-white)', marginTop: '0.5rem' }}>
                {activeLightboxItem.translations[language].title}
              </h3>
              <div className="lightbox-counter" style={{ fontSize: '0.85rem', color: '#a5a9b4', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(activeItems.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
