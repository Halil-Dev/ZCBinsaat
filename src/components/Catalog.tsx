'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data';
import { urlFor } from '../sanity/lib/client';

interface CatalogProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apartments?: any[];
}

export default function Catalog({ apartments }: CatalogProps) {
  const { language, t } = useLanguage();
  const [projectTab, setProjectTab] = useState<'ongoing' | 'completed'>('ongoing');
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Switch tabs and reset active indices
  const handleTabChange = (tab: 'ongoing' | 'completed') => {
    if (tab === projectTab) return;
    setProjectTab(tab);
    setActiveIndex(0);
    setDisplayIndex(0);
  };

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setFade(true);
    setActiveIndex(index);
    setTimeout(() => {
      setDisplayIndex(index);
      setFade(false);
    }, 300);
  };

  // Map Sanity apartments or fall back to static data
  const allApts = (apartments && apartments.length > 0) ? apartments.map((apt) => {
    let imageUrl = '/assets/floor_plan.png';
    try {
      if (apt.img) imageUrl = urlFor(apt.img).url();
    } catch {
      imageUrl = '/assets/floor_plan.png';
    }

    return {
      id: apt.id?.current || apt._id || '',
      img: imageUrl,
      status: apt.status || 'ongoing',
      title: apt[`title${language}`] || apt.titleTR || '',
      badge: apt[`badge${language}`] || apt.badgeTR || '',
      area: apt[`area${language}`] || apt.areaTR || '',
      facade: apt[`facade${language}`] || apt.facadeTR || '',
      bath: apt[`bath${language}`] || apt.bathTR || '',
    };
  }) : siteData.apartments.types.map((apt, idx) => {
    // Statically partition local fallback: 3 ongoing, 2 completed
    const fallbackStatus = idx < 3 ? 'ongoing' : 'completed';
    const aptTrans = apt.translations[language];
    return {
      id: apt.id,
      img: apt.img,
      status: fallbackStatus,
      title: aptTrans.title,
      badge: aptTrans.badge,
      area: aptTrans.area,
      facade: aptTrans.facade,
      bath: aptTrans.bath,
    };
  });

  const filteredApts = allApts.filter(apt => apt.status === projectTab);
  const activeApt = filteredApts[displayIndex];

  // Helper translations for tab sections
  const currentSubtitle = projectTab === 'ongoing' ? t('catalogLabelSelling') : t('catalogLabelSold');

  return (
    <section id="catalog" className="sec-padding bg-light">
      <div className="container">
        
        {/* Section title */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">{t('catalogTag')}</span>
          <h2 className="section-title">{currentSubtitle}</h2>
          <p className="section-subtitle">{t('catalogSubtitle')}</p>
        </div>

        {/* Project Type Tabs (Ongoing / Completed) */}
        <div className="project-tabs-container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <button
            className={`filter-btn ${projectTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => handleTabChange('ongoing')}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '0.95rem',
              fontWeight: '700',
              backgroundColor: projectTab === 'ongoing' ? 'var(--color-accent)' : 'var(--color-white)',
              color: projectTab === 'ongoing' ? 'var(--color-white)' : 'var(--color-dark)',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}
          >
            {t('catalogTabOngoing')}
          </button>
          <button
            className={`filter-btn ${projectTab === 'completed' ? 'active' : ''}`}
            onClick={() => handleTabChange('completed')}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '0.95rem',
              fontWeight: '700',
              backgroundColor: projectTab === 'completed' ? 'var(--color-accent)' : 'var(--color-white)',
              color: projectTab === 'completed' ? 'var(--color-white)' : 'var(--color-dark)',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}
          >
            {t('catalogTabCompleted')}
          </button>
        </div>

        {filteredApts.length > 0 && activeApt ? (
          /* Interactive Catalog Grid */
          <div className="catalog-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '4rem' }}>
            
            {/* Left Column: Selection list */}
            <div className="catalog-sidebar">
              <div className="apartment-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {filteredApts.map((apt, idx) => {
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
                        {apt.title}
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
                        {apt.badge}
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
                    alt={activeApt.title}
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
                    {activeApt.title} ({activeApt.badge})
                  </h3>
                  
                  <div className="spec-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light)', paddingBottom: '0.75rem' }}>
                      <span style={{ color: 'var(--color-grey)', fontWeight: '600' }}>{t('catalogBrut')}</span>
                      <span id="panelAptArea" style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{activeApt.area}</span>
                    </div>
                    <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light)', paddingBottom: '0.75rem' }}>
                      <span style={{ color: 'var(--color-grey)', fontWeight: '600' }}>{t('catalogFacade')}</span>
                      <span id="panelAptFacade" style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{activeApt.facade}</span>
                    </div>
                    <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light)', paddingBottom: '0.75rem' }}>
                      <span style={{ color: 'var(--color-grey)', fontWeight: '600' }}>{t('catalogBath')}</span>
                      <span id="panelAptBath" style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{activeApt.bath}</span>
                    </div>
                  </div>
                  
                  <a href="#contact" className="btn btn-primary btn-block btn-glow" style={{ marginTop: '2.5rem' }}>
                    {t('menuContact')}
                  </a>
                </div>

              </div>
            </div>

          </div>
        ) : (
          <div className="text-center" style={{ padding: '5rem 0', color: 'var(--color-grey)', fontSize: '1.2rem', fontWeight: '500' }}>
            {language === 'TR' 
              ? 'Bu kategoride henüz daire bulunmamaktadır.' 
              : language === 'EN' 
                ? 'No apartments in this category yet.' 
                : 'В этой категории пока нет квартир.'}
          </div>
        )}
      </div>
    </section>
  );
}
