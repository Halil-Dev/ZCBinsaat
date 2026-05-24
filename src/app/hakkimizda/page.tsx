'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function HakkimizdaPage() {
  const { language } = useLanguage();

  const content = {
    TR: {
      tag: "KURUMSAL",
      title: "Hakkımızda",
      subtitle: "ZCB İnşaat & Mühendislik",
      intro: "Modern şehirciliğin estetik ve güvenlikle buluştuğu nokta.",
      p1: "ZCB İnşaat & Mühendislik olarak, kurulduğumuz günden bu yana modern şehircilik anlayışını estetik detaylar ve sarsılmaz mühendislik prensipleriyle birleştiriyoruz.",
      p2: "Antalya'nın en prestijli bölgelerinde hayata geçirdiğimiz lüks konut projelerinde sadece binalar değil, yüksek dayanıklılık standartlarına uygun, deprem yönetmelikleriyle tam uyumlu ve estetik açıdan kusursuz yeni yaşam alanları inşa ediyoruz. Kaya zemin analizi ve ileri mühendislik teknikleriyle sarsılmaz temeller atıyoruz.",
      p3: "Geleceğin mimarisini bugünden şekillendirme vizyonumuzla; güven, konfor ve lüksü bir araya getirerek müşterilerimize ayrıcalıklı bir yaşam sunmaya devam ediyoruz."
    },
    EN: {
      tag: "CORPORATE",
      title: "About Us",
      subtitle: "ZCB Construction & Engineering",
      intro: "Where modern urbanism meets aesthetics and safety.",
      p1: "As ZCB Construction & Engineering, since the day we were founded, we combine modern urbanism with aesthetic details and unshakable engineering principles.",
      p2: "In the luxury residential projects we implement in Antalya's most prestigious regions, we do not only build buildings, but also construct new living spaces that comply with high durability standards, are fully compatible with earthquake regulations, and are aesthetically flawless. We lay unshakable foundations with rock soil analysis and advanced engineering techniques.",
      p3: "With our vision of shaping the architecture of the future today; we continue to offer a privileged life to our customers by combining trust, comfort, and luxury."
    },
    RU: {
      tag: "КОРПОРАТИВНЫЙ",
      title: "О нас",
      subtitle: "ZCB Строительство & Инжиниринг",
      intro: "Где современный урбанизм встречается с эстетикой и безопасностью.",
      p1: "Компания ZCB Строительство & Инжиниринг с момента своего основания сочетает в себе концепцию современного градостроительства с эстетическими деталями и незыблемыми инженерными принципами.",
      p2: "В проектах элитного жилья, которые мы реализуем в самых престижных районах Анталии, мы строим не просто здания, а создаем новые жилые пространства, соответствующие высоким стандартам долговечности, полностью совместимые с правилами сейсмостойкости и эстетически безупречные. Мы закладываем прочный фундамент с помощью анализа скального грунта и передовых инженерных технологий.",
      p3: "С нашим видением формирования архитектуры будущего уже сегодня; мы продолжаем предлагать нашим клиентам привилегированную жизнь, сочетая доверие, комфорт и роскошь."
    }
  };

  const active = content[language] || content.TR;

  return (
    <section className="sec-padding bg-dark text-white" style={{ minHeight: '85vh', paddingTop: '10rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="section-tag" style={{ color: 'var(--color-accent)' }}>{active.tag}</span>
        <h1 className="section-title text-white" style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
          {active.title}
        </h1>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-accent)', marginBottom: '2.5rem', fontWeight: '500' }}>
          {active.subtitle} — {active.intro}
        </h3>
        <div style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#a5a9b4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={{ fontWeight: '500', color: 'var(--color-white)', fontSize: '1.2rem' }}>
            {active.p1}
          </p>
          <p>{active.p2}</p>
          <p>{active.p3}</p>
        </div>
      </div>
    </section>
  );
}
