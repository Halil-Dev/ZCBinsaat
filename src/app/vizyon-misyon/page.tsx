'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { client } from '../../sanity/lib/client';

interface ValueItem {
  titleTR?: string;
  titleEN?: string;
  titleRU?: string;
  descTR?: string;
  descEN?: string;
  descRU?: string;
}

interface MappedValue {
  title: string;
  desc: string;
}

export default function VizyonMisyonPage() {
  const { language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "visionMission"][0]`)
      .then(data => setPageData(data))
      .catch(err => console.error("Failed to fetch vision/mission page data from Sanity:", err));
  }, []);

  const content = {
    TR: {
      tag: "KURUMSAL",
      title: "Vizyon & Misyon",
      visionTitle: "Vizyonumuz",
      visionText: "Güvenli zemin analizleri ve ileri teknoloji mühendisliği estetik mimariyle harmanlayarak, Antalya'da ve Türkiye genelinde geleceğin sarsılmaz, lüks ve sürdürülebilir yaşam alanlarını inşa eden öncü marka olmak.",
      missionTitle: "Misyonumuz",
      missionText: "Deprem yönetmeliklerine ve yüksek mühendislik standartlarına tavizsiz sadık kalarak, her projede en güvenli yapı teknolojilerini kullanmak. Estetik konseptlerimiz ve lüks yaşam tasarımlarımızla sadece güvenli değil, aynı zamanda yüksek konforlu, çevreye duyarlı ve yatırımcısına değer katan projeler sunmak.",
      valuesTitle: "Temel Değerlerimiz",
      values: [
        { title: "Mühendislik Gücü", desc: "Zemin analizinden çelik sınıfına kadar her aşamada üstün mühendislik disiplini uyguluyoruz." },
        { title: "Güven ve Dayanıklılık", desc: "Yaşam alanlarımızı nesiller boyu güvenle yaşanacak sarsılmaz temeller üzerine kuruyoruz." },
        { title: "Estetik ve Lüks", desc: "Modern mimari trendleri fonksiyonel lüks detaylarla birleştiriyoruz." }
      ]
    },
    EN: {
      tag: "CORPORATE",
      title: "Vision & Mission",
      visionTitle: "Our Vision",
      visionText: "To be the leading brand constructing the unshakable, luxury, and sustainable living spaces of the future in Antalya and across Turkey, by blending safe ground analysis and advanced technology engineering with aesthetic architecture.",
      missionTitle: "Our Mission",
      missionText: "To use the safest construction technologies in every project by adhering uncompromisingly to earthquake regulations and high engineering standards. To offer projects that are not only safe but also highly comfortable, environmentally sensitive, and value-adding to investors with our aesthetic concepts and luxury life designs.",
      valuesTitle: "Our Core Values",
      values: [
        { title: "Engineering Power", desc: "We apply superior engineering discipline at every stage, from soil analysis to steel grade." },
        { title: "Trust & Durability", desc: "We build our living spaces on unshakable foundations to be lived in safely for generations." },
        { title: "Aesthetics & Luxury", desc: "We combine modern architectural trends with functional luxury details." }
      ]
    },
    RU: {
      tag: "КОРПОРАТИВНЫЙ",
      title: "Видение и Миссия",
      visionTitle: "Наше Видение",
      visionText: "Быть ведущим брендом, создающим незыблемые, роскошные и устойчивые жилые пространства будущего в Анталии и по всей Турции, сочетая надежный анализ грунта и передовые инженерные технологии с эстетичной архитектурой.",
      missionTitle: "Наша Миссия",
      missionText: "Использовать самые безопасные строительные технологии в каждом проекте, бескомпромиссно придерживаясь правил сейсмостойкости и высоких инженерных стандартов. Предлагать проекты, которые не только безопасны, но и очень комфортны, экологичны и приносят пользу инвесторам благодаря нашим эстетическим концепциям и дизайну роскошной жизни.",
      valuesTitle: "Наши Ключевые Ценности",
      values: [
        { title: "Инженерная Сила", desc: "Мы применяем высочайшую инженерную дисциплину на каждом этапе, от анализа грунта до марки стали." },
        { title: "Доверие и Долговечность", desc: "Мы строимо наши жилые пространства на прочном фундаменте, чтобы в них можно было безопасно жить поколениями." },
        { title: "Эстетика и Роскошь", desc: "Мы сочетаем современные архитектурные тенденции с функциональными деталями роскоши." }
      ]
    }
  };

  const active = content[language] || content.TR;

  // Resolve values dynamically from Sanity if available, otherwise fall back to static
  const tag = pageData?.[`tag${language}`] || pageData?.tagTR || active.tag;
  const title = pageData?.[`title${language}`] || pageData?.titleTR || active.title;
  
  const visionTitle = pageData?.[`visionTitle${language}`] || pageData?.visionTitleTR || active.visionTitle;
  const visionText = pageData?.[`visionText${language}`] || pageData?.visionTextTR || active.visionText;

  const missionTitle = pageData?.[`missionTitle${language}`] || pageData?.missionTitleTR || active.missionTitle;
  const missionText = pageData?.[`missionText${language}`] || pageData?.missionTextTR || active.missionText;

  const valuesTitle = pageData?.[`valuesTitle${language}`] || pageData?.valuesTitleTR || active.valuesTitle;

  // Process the valuesList array or use fallback values
  const values: MappedValue[] = pageData?.valuesList?.map((item: ValueItem) => ({
    title: item[`title${language}`] || item.titleTR || '',
    desc: item[`desc${language}`] || item.descTR || ''
  })) || active.values;

  return (
    <section className="sec-padding bg-dark text-white" style={{ minHeight: '85vh', paddingTop: '10rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="section-tag" style={{ color: 'var(--color-accent)' }}>{tag}</span>
        <h1 className="section-title text-white" style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '3.5rem' }}>
          {title}
        </h1>

        {/* Vision */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-white)', marginBottom: '1rem', fontWeight: '700' }}>
            {visionTitle}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#a5a9b4' }}>
            {visionText}
          </p>
        </div>

        {/* Mission */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-white)', marginBottom: '1rem', fontWeight: '700' }}>
            {missionTitle}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#a5a9b4' }}>
            {missionText}
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-white)', marginBottom: '2rem', fontWeight: '700' }}>
            {valuesTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {values.map((val: MappedValue, idx: number) => (
              <div key={idx} style={{ padding: '1.5rem', backgroundColor: '#383a45', borderRadius: '4px', borderLeft: '4px solid var(--color-accent)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-white)', marginBottom: '0.5rem', fontWeight: '600' }}>
                  {val.title}
                </h3>
                <p style={{ color: '#a5a9b4', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
