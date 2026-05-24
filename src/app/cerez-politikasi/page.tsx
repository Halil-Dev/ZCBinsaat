'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { client } from '../../sanity/lib/client';

export default function CerezPolitikasiPage() {
  const { language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "page" && slug.current == "cerez-politikasi"][0]`)
      .then(data => setPageData(data))
      .catch(err => console.error("Failed to fetch page data from Sanity:", err));
  }, []);

  const content = {
    TR: {
      tag: "YASAL",
      title: "Çerez Politikası",
      subtitle: "Web Sitemizde Kullanılan Çerezler Hakkında Bilgilendirme",
      p1: "ZCB İnşaat & Mühendislik olarak, web sitemizi ziyaret eden tüm kullanıcılarımızın kullanıcı deneyimini artırmak ve sitemizin verimli çalışmasını sağlamak amacıyla çerezler (cookies) kullanmaktayız.",
      p2: "Çerezler, ziyaret ettiğiniz web siteleri tarafından bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezlerin kullanım amacı; sitenin işlevselliğini geliştirmek, dil tercihlerinizi hatırlamak ve kullanıcı analitiği yapmaktır.",
      p3: "Çerezleri tarayıcı ayarlarınız üzerinden dilediğiniz gibi engelleyebilir veya silebilirsiniz. Ancak çerezlerin devre dışı bırakılması durumunda sitemizdeki bazı özelliklerin tam olarak çalışmayabileceğini belirtmek isteriz."
    },
    EN: {
      tag: "LEGAL",
      title: "Cookie Policy",
      subtitle: "Information About Cookies Used on Our Website",
      p1: "As ZCB Construction & Engineering, we use cookies to improve the user experience of all visitors on our website and to ensure that our site works efficiently.",
      p2: "Cookies are small text files saved on your computer or mobile device by the websites you visit. The purpose of using cookies is to improve site functionality, remember your language preferences, and perform user analytics.",
      p3: "You can block or delete cookies as you wish through your browser settings. However, we would like to state that if cookies are disabled, some features on our site may not work fully."
    },
    RU: {
      tag: "ЮРИДИЧЕСКИЙ",
      title: "Политика Использования Файлов Cookie",
      subtitle: "Информация о файлах cookie, используемых на нашем веб-сайте",
      p1: "В компании ZCB Строительство & Инжиниринг мы используем файлы cookie с целью улучшения взаимодействия со всеми пользователями, посещающими наш сайт, и обеспечения его эффективной работы.",
      p2: "Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем компьютере или мобильном устройстве посещаемыми вами веб-сайтами. Цель их использования: улучшение функциональности сайта, запоминание языковых настроек и анализ пользовательских данных.",
      p3: "Вы можете заблокировать или удалить файлы cookie через настройки своего браузера. Однако обращаем ваше внимание на то, что в случае отключения файлов cookie некоторые функции нашего сайта могут работать некорректно."
    }
  };

  const active = content[language] || content.TR;

  // Resolve values dynamically from Sanity if available, otherwise fall back to static
  const tag = pageData?.[`tag${language}`] || pageData?.tagTR || active.tag;
  const title = pageData?.[`title${language}`] || pageData?.titleTR || active.title;
  const subtitle = pageData?.[`subtitle${language}`] || pageData?.subtitleTR || active.subtitle;
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
          {subtitle}
        </h3>
        <div style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#a5a9b4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {p1 && <p>{p1}</p>}
          {p2 && <p>{p2}</p>}
          {p3 && <p>{p3}</p>}
        </div>
      </div>
    </section>
  );
}
