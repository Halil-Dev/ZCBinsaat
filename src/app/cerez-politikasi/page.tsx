'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function CerezPolitikasiPage() {
  const { language } = useLanguage();

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
