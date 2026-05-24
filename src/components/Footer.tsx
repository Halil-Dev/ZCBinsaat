'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteData, SupportedLanguages } from '../data';

export default function Footer() {
  const { setLanguage, t } = useLanguage();

  const handleLangChange = (lang: SupportedLanguages, e: React.MouseEvent) => {
    e.preventDefault();
    setLanguage(lang);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Upper footer grid */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="/" className="footer-logo">
              ZCB <span className="logo-accent">{t('companyLogoText')}</span>
            </a>
            <p>{t('footerDesc')}</p>
          </div>

          <div className="footer-links-col">
            <h4>{t('footerTitleCorp')}</h4>
            <ul>
              <li><a href="/hakkimizda">{t('menuAbout')}</a></li>
              <li><a href="/vizyon-misyon">{t('footerLinkMission')}</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footerTitleProj')}</h4>
            <ul>
              <li><a href="/#catalog">{t('menuCatalog')}</a></li>
              <li><a href="/#gallery">{t('menuGallery')}</a></li>
              <li><a href="/#catalog">{t('footerCatalog')}</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footerTitleLegal')}</h4>
            <ul>
              <li><a href="/kvkk">{t('footerLinkKvkk')}</a></li>
              <li><a href="/cerez-politikasi">{t('footerLinkCookies')}</a></li>
              <li><a href="/kullanim-kosullari">{t('footerLinkTerms')}</a></li>
            </ul>
          </div>
        </div>

        {/* Lower footer row */}
        <div className="footer-bottom">
          <p>{t('footerCopyright')}</p>
          
          <div className="footer-bottom-links">
            {siteData.languages.map((lang) => (
              <a
                key={lang}
                href="#"
                onClick={(e) => handleLangChange(lang, e)}
                style={{
                  marginRight: '1rem',
                  fontWeight: '700',
                  fontSize: '0.85rem'
                }}
              >
                {lang}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
