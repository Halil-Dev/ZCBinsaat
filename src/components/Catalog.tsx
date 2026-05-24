'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';
import { siteData } from '../data';

export default function Catalog() {
  const { language, t } = useLanguage();
  const { showToast } = useToast();
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setFade(true);
    setActiveIndex(index);
    setTimeout(() => {
      setDisplayIndex(index);
      setFade(false);
    }, 300);
  };

  const handleDownload = (e: React.MouseEvent, type: 'katalog' | 'sunum' | 'pptx') => {
    e.preventDefault();
    if (downloading) return;
    setDownloading(type);

    let fileName = '';
    let fileUrl = '';

    if (type === 'katalog') {
      fileName = 'ZCB_Katalog.pdf';
      fileUrl = '/documents/zcb-katalog.pdf';
    } else if (type === 'sunum') {
      fileName = 'ZCB_Sunum.pdf';
      fileUrl = '/documents/zcb-sunum.pdf';
    } else {
      fileName = 'ZCB_Firma_Tanitimi.pptx';
      fileUrl = '/documents/zcb-firma-tanitimi.pptx';
    }
    
    // Trigger toast showing it's starting
    showToast(t('catalogTag'), t('catalogPreparing'));

    setTimeout(() => {
      // Trigger success toast
      showToast(t('catalogPdfSuccessTitle'), t('catalogPdfSuccessMsg'));
      setDownloading(null);
      
      // Simulate file download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const activeApt = siteData.apartments.types[displayIndex];
  const activeDetails = activeApt.translations[language];

  return (
    <section id="catalog" className="sec-padding bg-light">
      <div className="container">
        
        {/* Catalog Header Info */}
        <div className="catalog-summary-card" style={{ display: 'flex', backgroundColor: 'var(--color-dark)', color: 'var(--color-white)', padding: '3rem', marginBottom: '5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <div className="total-units" style={{ borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: '700', letterSpacing: '0.1em' }}>
              {t('catalogTotalLabel')}
            </span>
            <span style={{ fontSize: '3rem', fontWeight: '800', lineHeight: 1.1, margin: '0.5rem 0' }}>
              {siteData.apartments.totalCount}
            </span>
            <span style={{ fontSize: '0.9rem', color: '#a5a9b4', fontWeight: '600' }}>
              {t('catalogTotalSuffix')}
            </span>
          </div>
          
          <div className="summary-desc" style={{ paddingLeft: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#a5a9b4', margin: 0 }}>
              {t('catalogSummaryText')}
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="#" 
                onClick={(e) => handleDownload(e, 'katalog')} 
                className="btn btn-outline" 
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <svg style={{ marginRight: '8px' }} width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                {downloading === 'katalog' ? t('catalogPreparing') : t('catalogDownloadPdf')}
              </a>
              <a 
                href="#" 
                onClick={(e) => handleDownload(e, 'sunum')} 
                className="btn btn-outline" 
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <svg style={{ marginRight: '8px' }} width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                {downloading === 'sunum' ? t('catalogPreparing') : t('catalogDownloadPresentation')}
              </a>
              <a 
                href="#" 
                onClick={(e) => handleDownload(e, 'pptx')} 
                className="btn btn-outline" 
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <svg style={{ marginRight: '8px' }} width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                {downloading === 'pptx' ? t('catalogPreparing') : t('catalogDownloadPptx')}
              </a>
            </div>
          </div>
        </div>

        {/* Section title */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">{t('catalogTag')}</span>
          <h2 className="section-title">{t('catalogTitle')}</h2>
          <p className="section-subtitle">{t('catalogSubtitle')}</p>
        </div>

        {/* Interactive Catalog Grid */}
        <div className="catalog-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '4rem' }}>
          
          {/* Left Column: Selection list */}
          <div className="catalog-sidebar">
            <div className="apartment-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {siteData.apartments.types.map((apt, idx) => {
                const aptTrans = apt.translations[language];
                const active = idx === activeIndex;
                return (
                  <button
                    key={apt.id}
                    className={`apt-type-btn ${active ? 'active' : ''}`}
                    onClick={() => handleSelect(idx)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.5rem 2rem',
                      backgroundColor: active ? 'var(--color-accent)' : 'var(--color-white)',
                      color: active ? 'var(--color-white)' : 'var(--color-dark)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s ease',
                      borderLeft: active ? '5px solid var(--color-white)' : 'none',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontWeight: '700', fontSize: '1.05rem' }}>
                      {aptTrans.title}
                    </span>
                    <span 
                      className="apt-badge" 
                      style={{ 
                        fontSize: '0.8rem', 
                        padding: '0.35rem 0.75rem', 
                        backgroundColor: active ? 'rgba(255,255,255,0.2)' : 'var(--color-light)', 
                        color: active ? 'var(--color-white)' : 'var(--color-grey)', 
                        fontWeight: '700' 
                      }}
                    >
                      {aptTrans.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Display Panel */}
          <div className="catalog-display">
            <div className="display-panel" style={{ backgroundColor: 'var(--color-white)', padding: '3.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
              
              {/* Floor Plan Image */}
              <div className="panel-image-col">
                <img
                  id="panelAptImg"
                  src={activeApt.img}
                  alt={activeDetails.title}
                  className={fade ? 'fade-effect' : ''}
                  style={{ width: '100%', objectFit: 'contain', maxHeight: '350px' }}
                />
              </div>

              {/* Floor Plan Specs */}
              <div className="panel-info-col">
                <h3 
                  id="panelAptTitle" 
                  style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-light)', paddingBottom: '1rem' }}
                >
                  {activeDetails.title} ({activeDetails.badge})
                </h3>
                
                <div className="spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--color-grey)', fontWeight: '600' }}>{t('catalogBrut')}</span>
                    <span id="panelAptArea" style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{activeDetails.area}</span>
                  </div>
                  <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--color-grey)', fontWeight: '600' }}>{t('catalogFacade')}</span>
                    <span id="panelAptFacade" style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{activeDetails.facade}</span>
                  </div>
                  <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--color-grey)', fontWeight: '600' }}>{t('catalogBath')}</span>
                    <span id="panelAptBath" style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{activeDetails.bath}</span>
                  </div>
                </div>
                
                <a href="#contact" className="btn btn-primary btn-block btn-glow" style={{ marginTop: '2.5rem' }}>
                  {t('menuContact')}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
