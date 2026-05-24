'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { siteData, SupportedLanguages } from '../data';

interface NavbarProps {
  settings?: {
    phone?: string;
    phoneRaw?: string;
    email?: string;
    address?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  } | null;
}

export default function Navbar({ settings }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown if clicked outside
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, []);

  const handleLangChange = (lang: SupportedLanguages, e: React.MouseEvent) => {
    e.preventDefault();
    setLanguage(lang);
    setLangOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const pathname = usePathname();
  if (pathname?.startsWith('/zcb-admin-panel')) return null;

  const phone = settings?.phone || siteData.contactInfo.phone;
  const email = settings?.email || siteData.contactInfo.email;
  const address = settings?.address || siteData.contactInfo.address;
  const instagram = settings?.instagram || siteData.contactInfo.socials.instagram;
  const facebook = settings?.facebook || siteData.contactInfo.socials.facebook;
  const linkedin = settings?.linkedin || siteData.contactInfo.socials.linkedin;
  const youtube = settings?.youtube || siteData.contactInfo.socials.youtube;

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-container">
          <Link href="/" className="logo" onClick={closeMenu}>
            ZCB <span className="logo-accent">{t('companyLogoText')}</span>
          </Link>

          <div className="nav-actions">
            {/* Language Selector */}
            <div className={`lang-selector ${langOpen ? 'open' : ''}`} ref={langRef}>
              <button 
                className="lang-btn" 
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
              >
                <span>{language}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="lang-dropdown">
                {siteData.languages.map((lang) => (
                  <a
                    key={lang}
                    href="#"
                    className={language === lang ? 'active' : ''}
                    onClick={(e) => handleLangChange(lang, e)}
                  >
                    {lang === 'TR' ? 'Türkçe' : lang === 'EN' ? 'English' : 'Русский'}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Trigger */}
            <button className="menu-trigger" onClick={toggleMenu} aria-label={t('menuBtn')}>
              <span className="menu-text">{t('menuBtn')}</span>
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="menu-bg-accent"></div>
        <div className="menu-content">
          <nav className="overlay-nav">
            <ul>
              <li>
                <Link href="/" className="menu-link" onClick={closeMenu}>
                  {t('menuHome')}
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="menu-link" onClick={closeMenu}>
                  {t('menuAbout')}
                </Link>
              </li>
              <li>
                <Link href="/#catalog" className="menu-link" onClick={closeMenu}>
                  {t('menuCatalog')}
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="menu-link" onClick={closeMenu}>
                  {t('menuGallery')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="menu-link" onClick={closeMenu}>
                  {t('menuContact')}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="menu-contact-info">
            <h3 className="logo">
              ZCB <span className="logo-accent">{t('companyLogoText')}</span>
            </h3>
            <p style={{ marginTop: '2rem' }}>
              <svg style={{ display: 'inline', marginRight: '8px' }} width="16" height="16" fill="var(--color-accent)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.654 1.328a.678.678 0 0 0-.01-.063L3.5 1.7a2.5 2.5 0 0 0-4.9-.1v11.6a2.5 2.5 0 0 0 4.9.1l.144-.435a.678.678 0 0 0-.01-.063zM1.8 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1.8a1.8 1.8 0 0 1 0-3.6h.4a.8.8 0 0 0 0-1.6h-.4a1.8 1.8 0 0 1 0-3.6h.4a.8.8 0 0 0 0-1.6h-.4a1.8 1.8 0 0 1 0-3.6z"/>
              </svg>
              {phone}
            </p>
            <p>
              <svg style={{ display: 'inline', marginRight: '8px' }} width="16" height="16" fill="var(--color-accent)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
              </svg>
              {email}
            </p>
            <p>
              <svg style={{ display: 'inline', marginRight: '8px', flexShrink: 0 }} width="16" height="16" fill="var(--color-accent)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              <span>{address}</span>
            </p>

            <div className="menu-socials">
              <a href={instagram} target="_blank" rel="noopener noreferrer">IG</a>
              <a href={facebook} target="_blank" rel="noopener noreferrer">FB</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">LN</a>
              <a href={youtube} target="_blank" rel="noopener noreferrer">YT</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
