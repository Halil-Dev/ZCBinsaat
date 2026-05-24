'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData, SupportedLanguages, LanguageDictionary } from '../data';

interface LanguageContextProps {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
  t: (key: keyof LanguageDictionary) => string;
  th: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguages>('TR');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('zcb_lang') as SupportedLanguages;
    if (savedLang && siteData.languages.includes(savedLang) && savedLang !== 'TR') {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: SupportedLanguages) => {
    setLanguageState(lang);
    localStorage.setItem('zcb_lang', lang);
  };

  const t = (key: keyof LanguageDictionary): string => {
    const dict = siteData.translations[language];
    return dict ? (dict[key] || String(key)) : String(key);
  };

  const th = (key: string): string => {
    const heroDict = siteData.heroTranslations[language];
    if (heroDict && heroDict[key]) {
      return heroDict[key];
    }
    const dict = siteData.translations[language];
    if (dict && key in dict) {
      return dict[key as keyof LanguageDictionary];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, th }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
