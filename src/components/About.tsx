'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="sec-padding">
      <div className="container">
        {/* Style of about section uses grid, let's make sure class matches styles.css */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          
          {/* Left Column: Text Content */}
          <div className="about-content-col">
            <span className="section-tag">{t('aboutTag')}</span>
            <h2 className="section-title">{t('aboutTitle')}</h2>
            <p className="about-lead" style={{ fontSize: '1.2rem', color: 'var(--color-dark)', fontWeight: '600', marginBottom: '1.5rem' }}>
              {t('aboutLead')}
            </p>
            <p className="about-text" style={{ color: 'var(--color-grey)', marginBottom: '2.5rem' }}>
              {t('aboutText')}
            </p>
            
            {/* Stats Block */}
            <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div className="stat-item">
                <span className="stat-num" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', display: 'block' }}>10+</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: 'var(--color-grey)', textTransform: 'uppercase', fontWeight: '600' }}>
                  {t('aboutStatExperience')}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-num" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', display: 'block' }}>500+</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: 'var(--color-grey)', textTransform: 'uppercase', fontWeight: '600' }}>
                  {t('aboutStatFamilies')}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-num" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', display: 'block' }}>100%</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: 'var(--color-grey)', textTransform: 'uppercase', fontWeight: '600' }}>
                  {t('aboutStatDelivery')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Overlay Banner */}
          <div className="about-image-col" style={{ position: 'relative' }}>
            <img 
              src="/assets/about.png" 
              alt={t('aboutOverlayTitle')} 
              style={{ width: '100%', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
            {/* Engineering standard overlay block */}
            <div 
              className="about-image-overlay" 
              style={{ 
                position: 'absolute', 
                bottom: '-2rem', 
                left: '2rem', 
                right: '2rem', 
                backgroundColor: 'var(--color-dark)', 
                color: 'var(--color-white)', 
                padding: '2rem', 
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)' 
              }}
            >
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>
                {t('aboutOverlayTitle')}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#a5a9b4', margin: 0 }}>
                {t('aboutOverlayText')}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
