'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';
import { siteData } from '../data';

import { submitContactForm } from '../app/actions';

export default function Contact() {
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast(t('formErrorTitle'), t('formErrorMsg'), true);
      return;
    }

    setSending(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        showToast(t('formSuccessTitle'), t('formSuccessMsg'), false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        showToast(t('formErrorTitle'), result.error || t('formErrorMsg'), true);
      }
    } catch {
      showToast(t('formErrorTitle'), t('formErrorMsg'), true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="sec-padding bg-dark text-white" style={{ position: 'relative' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem' }}>
          
          {/* Left Column: Contact Details & Map */}
          <div className="contact-info-col">
            <span className="section-tag tag-light">{t('contactTag')}</span>
            <h2 className="section-title text-white" style={{ marginBottom: '2.5rem' }}>{t('contactTitle')}</h2>
            <p className="text-light-muted" style={{ marginBottom: '3rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {t('contactSub')}
            </p>

            <div className="contact-details-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="detail-item-box" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-accent)' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524-1.062-1.234-1.97-1.96-2.658a1 1 0 0 0-1.42 0c-.726.687-1.436 1.596-1.96 2.658C6.313 10.007 6 11.13 6 12a4 4 0 0 0 8 0c0-.87-.313-1.993-.834-3.06z"/>
                    <path d="M8 1a5 5 0 0 0-5 5c0 4.093 4.17 8.795 4.673 9.343a.5.5 0 0 0 .654 0C8.83 14.795 13 10.093 13 6a5 5 0 0 0-5-5zm0 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#a5a9b4', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.35rem' }}>
                    {t('contactLabelAddressTitle')}
                  </h4>
                  <p style={{ color: 'var(--color-white)', fontWeight: '600', margin: 0 }}>
                    {siteData.contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="detail-item-box" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-accent)' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#a5a9b4', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.35rem' }}>
                    {t('contactLabelPhoneTitle')}
                  </h4>
                  <a href={`tel:${siteData.contactInfo.phoneRaw}`} style={{ color: 'var(--color-white)', fontWeight: '700', fontSize: '1.15rem' }}>
                    {siteData.contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="detail-item-box" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-accent)' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#a5a9b4', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.35rem' }}>
                    {t('contactLabelEmailTitle')}
                  </h4>
                  <a href={`mailto:${siteData.contactInfo.email}`} style={{ color: 'var(--color-white)', fontWeight: '600' }}>
                    {siteData.contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-container">
              <div className="styled-map-placeholder" style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <iframe
                  src={siteData.contactInfo.googleMapsIframe}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Info Request Form */}
          <div className="contact-form-col" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="form-wrapper" style={{ backgroundColor: 'var(--color-white)', padding: '3.5rem', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', width: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-dark)', marginBottom: '0.75rem', fontWeight: '700' }}>
                {t('contactFormTitle')}
              </h3>
              <p style={{ color: 'var(--color-grey)', fontSize: '0.95rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                {t('contactFormText')}
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                <div className="form-group" style={{ position: 'relative' }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label>{t('contactLabelName')}</label>
                </div>

                <div className="form-group" style={{ position: 'relative' }}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label>{t('contactLabelPhone')}</label>
                </div>

                <div className="form-group" style={{ position: 'relative' }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label>{t('contactLabelEmail')}</label>
                </div>

                <div className="form-group" style={{ position: 'relative' }}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  ></textarea>
                  <label>{t('contactLabelMessage')}</label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block btn-glow"
                  disabled={sending}
                  style={{ marginTop: '1rem' }}
                >
                  {sending ? t('contactBtnSending') : t('contactBtnSend')}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
