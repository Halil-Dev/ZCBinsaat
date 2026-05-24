'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { client } from '../../sanity/lib/client';

export default function HakkimizdaPage() {
  const { language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "page" && slug.current == "hakkimizda"][0]`)
      .then(data => setPageData(data))
      .catch(err => console.error("Failed to fetch page data from Sanity:", err));
  }, []);

  const content = {
    TR: {
      tag: "KURUMSAL",
      title: "Hakkımızda",
      subtitle: "ZCB İnşaat & Mühendislik",
      intro: "Modern şehirciliğin estetik ve güvenlikle buluştuğu nokta.",
      p1: "ZCB İnşaat & Mühendislik olarak, kurulduğumuz günden bu yana modern şehircilik anlayışını estetik detaylar ve sarsılmaz mühendislik prensipleriyle birleştiriyoruz.",
      p2: "Kocaeli Darıca'nın en prestijli bölgelerinde hayata geçirdiğimiz lüks konut projelerinde sadece binalar değil, yüksek dayanıklılık standartlarına uygun, deprem yönetmelikleriyle tam uyumlu ve estetik açıdan kusursuz yeni yaşam alanları inşa ediyoruz. Kaya zemin analizi ve ileri mühendislik teknikleriyle sarsılmaz temeller atıyoruz.",
      p3: "Geleceğin mimarisini bugünden şekillendirme vizyonumuzla; güven, konfor ve lüksü bir araya getirerek müşterilerimize ayrıcalıklı bir yaşam sunmaya devam ediyoruz."
    },
    EN: {
      tag: "CORPORATE",
      title: "About Us",
      subtitle: "ZCB Construction & Engineering",
      intro: "Where modern urbanism meets aesthetics and safety.",
      p1: "As ZCB Construction & Engineering, since the day we were founded, we combine modern urbanism with aesthetic details and unshakable engineering principles.",
      p2: "In the luxury residential projects we implement in Kocaeli Darıca's most prestigious regions, we do not only build buildings, but also construct new living spaces that comply with high durability standards, are fully compatible with earthquake regulations, and are aesthetically flawless. We lay unshakable foundations with rock soil analysis and advanced engineering techniques.",
      p3: "With our vision of shaping the architecture of the future today; we continue to offer a privileged life to our customers by combining trust, comfort, and luxury."
    },
    RU: {
      tag: "КОРПОРАТИВНЫЙ",
      title: "О нас",
      subtitle: "ZCB Строительство & Инжиниринг",
      intro: "Где современный урбанизм встречается с эстетикой и безопасностью.",
      p1: "Компания ZCB Строительство & Инжиниринг с момента своего основания сочетает в себе концепцию современного градостроительства с эстетическими деталями и незыблемыми инженерными принципами.",
      p2: "В проектах элитного жилья, которые мы реализуем в самых престижных районах Коджаэли Дариджи, мы строим не просто здания, а создаем новые жилые пространства, соответствующие высоким стандартам долговечности, полностью совместимые с правилами сейсмостойкости и эстетически безупречные. Мы закладываем прочный фундамент с помощью анализа скального грунта и передовых инженерных технологий.",
      p3: "С нашим видением формирования архитектуры будущего уже сегодня; мы продолжаем предлагать нашим клиентам привилегированную жизнь, сочетая доверие, комфорт и роскошь."
    }
  };

  const active = content[language] || content.TR;

  // Resolve values dynamically from Sanity if available, otherwise fall back to static
  const tag = pageData?.[`tag${language}`] || pageData?.tagTR || active.tag;
  const title = pageData?.[`title${language}`] || pageData?.titleTR || active.title;
  const subtitle = pageData?.[`subtitle${language}`] || pageData?.subtitleTR || active.subtitle;
  const intro = pageData?.[`intro${language}`] || pageData?.introTR || active.intro;
  const p1 = pageData?.[`p1${language}`] || pageData?.p1TR || active.p1;
  const p2 = pageData?.[`p2${language}`] || pageData?.p2TR || active.p2;
  const p3 = pageData?.[`p3${language}`] || pageData?.p3TR || active.p3;

  return (
    <section className="sec-padding bg-dark text-white" style={{ minHeight: '85vh', paddingTop: '10rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="section-tag" style={{ color: 'var(--color-accent)' }}>{tag}</span>
        <h1 className="section-title text-white" style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
          {title}
        </h1>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-accent)', marginBottom: '2.5rem', fontWeight: '500' }}>
          {subtitle} {intro ? `— ${intro}` : ''}
        </h3>
        <div style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#a5a9b4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {p1 && (
            <p style={{ fontWeight: '500', color: 'var(--color-white)', fontSize: '1.2rem' }}>
              {p1}
            </p>
          )}
          {p2 && <p>{p2}</p>}
          {p3 && <p>{p3}</p>}
        </div>
      </div>
    </section>
  );
}
