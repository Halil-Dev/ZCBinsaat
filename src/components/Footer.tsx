'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { siteData, SupportedLanguages } from '../data';

interface FooterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  settings?: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Footer({ settings }: FooterProps) {
  const pathname = usePathname();
  if (pathname?.startsWith('/zcb-admin-panel')) return null;

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
            <Link href="/" className="footer-logo">
              ZCB <span className="logo-accent">{t('companyLogoText')}</span>
            </Link>
            <p>{t('footerDesc')}</p>
          </div>

          <div className="footer-links-col">
            <h4>{t('footerTitleCorp')}</h4>
            <ul>
              <li><Link href="/hakkimizda">{t('menuAbout')}</Link></li>
              <li><Link href="/vizyon-misyon">{t('footerLinkMission')}</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footerTitleProj')}</h4>
            <ul>
              <li><Link href="/#catalog">{t('menuCatalog')}</Link></li>
              <li><Link href="/#gallery">{t('menuGallery')}</Link></li>
              <li><Link href="/#catalog">{t('footerCatalog')}</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footerTitleLegal')}</h4>
            <ul>
              <li><Link href="/kvkk">{t('footerLinkKvkk')}</Link></li>
              <li><Link href="/cerez-politikasi">{t('footerLinkCookies')}</Link></li>
              <li><Link href="/kullanim-kosullari">{t('footerLinkTerms')}</Link></li>
              <li><Link href="/zcb-admin-panel">Admin</Link></li>
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
