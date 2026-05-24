'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function KullanimKosullariPage() {
  const { language } = useLanguage();

  const content = {
    TR: {
      tag: "YASAL",
      title: "Kullanım Koşulları",
      subtitle: "Web Sitesi Kullanım ve Hizmet Şartları",
      p1: "Bu web sitesini ziyaret ederek veya sitede sunulan hizmetleri kullanarak, bu belgede belirtilen tüm şart ve koşulları kabul etmiş sayılırsınız.",
      p2: "ZCB İnşaat & Mühendislik, web sitesinde yer alan tüm görsel, metinsel ve teknik içeriklerin fikri mülkiyet haklarına sahiptir. Bu içeriklerin izinsiz kopyalanması, dağıtılması ve ticari amaçlarla kullanılması yasaktır.",
      p3: "Şirketimiz, web sitesinde sunulan bilgilerin doğruluğu ve güncelliği için azami çaba göstermekle birlikte; sitede yer alan bilgilerin doğruluğu konusunda hiçbir garanti vermez. Fiyatlar, projeler ve stok durumları satış ofislerimizden teyit edilmelidir."
    },
    EN: {
      tag: "LEGAL",
      title: "Terms of Use",
      subtitle: "Website Terms of Use and Service",
      p1: "By visiting this website or using the services provided on the site, you are deemed to have accepted all terms and conditions set forth in this document.",
      p2: "ZCB Construction & Engineering holds the intellectual property rights to all visual, textual, and technical contents on the website. Unauthorized copying, distribution, and commercial use of these contents are prohibited.",
      p3: "Although our company makes maximum efforts to keep the information on the website accurate and up-to-date, it does not guarantee its accuracy. Prices, projects, and availability statuses must be confirmed with our sales offices."
    },
    RU: {
      tag: "ЮРИДИЧЕСКИЙ",
      title: "Условия Использования",
      subtitle: "Правила использования веб-сайта и условия обслуживания",
      p1: "Посещая данный веб-сайт или пользуясь предоставляемыми на нем услугами, вы подтверждаете свое согласие со всеми правилами и условиями, изложенными в данном документе.",
      p2: "ZCB Строительство & Инжиниринг обладает правами интеллектуальной собственности на все визуальные, текстовые и технические материалы, представленные на веб-сайте. Несанкционированное копирование, распространение и использование этих материалов в коммерческих целях запрещено.",
      p3: "Наша компания прилагает максимум усилий для обеспечения точности и актуальности информации на сайте, однако не гарантирует ее абсолютную точность. Цены, проекты и состояние запасов должны быть подтверждены в наших офисах продаж."
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
          {active.subtitle}
        </h3>
        <div style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#a5a9b4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>{active.p1}</p>
          <p>{active.p2}</p>
          <p>{active.p3}</p>
        </div>
      </div>
    </section>
  );
}
