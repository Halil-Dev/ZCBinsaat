'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { urlFor } from '../sanity/lib/client';

interface AboutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export default function About({ data }: AboutProps) {
  const { language, t } = useLanguage();

  // Localized values with default fallbacks
  const tag = data?.[`tag${language}`] || data?.tagTR || t('aboutTag');
  const title = data?.[`title${language}`] || data?.titleTR || t('aboutTitle');
  const lead = data?.[`lead${language}`] || data?.leadTR || t('aboutLead');
  const text = data?.[`text${language}`] || data?.textTR || t('aboutText');
  const overlayTitle = data?.[`overlayTitle${language}`] || data?.overlayTitleTR || t('aboutOverlayTitle');
  const overlayText = data?.[`overlayText${language}`] || data?.overlayTextTR || t('aboutOverlayText');

  let imageUrl = '/assets/about.png';
  try {
    if (data?.image) imageUrl = urlFor(data.image).url();
  } catch (e) {
    console.error("Error formatting About image URL:", e);
  }

  const statExperienceVal = data?.statExperienceVal || '10+';
  const statExperienceLabel = data?.[`statExperienceLabel${language}`] || data?.statExperienceLabelTR || t('aboutStatExperience');
  
  const statFamiliesVal = data?.statFamiliesVal || '500+';
  const statFamiliesLabel = data?.[`statFamiliesLabel${language}`] || data?.statFamiliesLabelTR || t('aboutStatFamilies');
  
  const statDeliveryVal = data?.statDeliveryVal || '100%';
  const statDeliveryLabel = data?.[`statDeliveryLabel${language}`] || data?.statDeliveryLabelTR || t('aboutStatDelivery');

  return (
    <section id="about" className="sec-padding">
      <div className="container">
        {/* Style of about section uses grid, let's make sure class matches styles.css */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          
          {/* Left Column: Text Content */}
          <div className="about-content-col">
            <span className="section-tag">{tag}</span>
            <h2 className="section-title">{title}</h2>
            <p className="about-lead" style={{ fontSize: '1.2rem', color: 'var(--color-dark)', fontWeight: '600', marginBottom: '1.5rem' }}>
              {lead}
            </p>
            <p className="about-text" style={{ color: 'var(--color-grey)', marginBottom: '2.5rem' }}>
              {text}
            </p>
            
            {/* Stats Block */}
            <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div className="stat-item">
                <span className="stat-num" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', display: 'block' }}>{statExperienceVal}</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: 'var(--color-grey)', textTransform: 'uppercase', fontWeight: '600' }}>
                  {statExperienceLabel}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-num" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', display: 'block' }}>{statFamiliesVal}</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: 'var(--color-grey)', textTransform: 'uppercase', fontWeight: '600' }}>
                  {statFamiliesLabel}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-num" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', display: 'block' }}>{statDeliveryVal}</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: 'var(--color-grey)', textTransform: 'uppercase', fontWeight: '600' }}>
                  {statDeliveryLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Overlay Banner */}
          <div className="about-image-col" style={{ position: 'relative' }}>
            <img 
              src={imageUrl} 
              alt={overlayTitle} 
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
                {overlayTitle}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#a5a9b4', margin: 0 }}>
                {overlayText}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
