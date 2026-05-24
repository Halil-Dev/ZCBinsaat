'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { client } from '../../sanity/lib/client';

export default function KvkkPage() {
  const { language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "page" && slug.current == "kvkk"][0]`)
      .then(data => setPageData(data))
      .catch(err => console.error("Failed to fetch page data from Sanity:", err));
  }, []);

  const content = {
    TR: {
      tag: "YASAL",
      title: "KVKK Aydınlatma Metni",
      subtitle: "Kişisel Verilerin Korunması Kanunu",
      intro: "ZCB İnşaat & Mühendislik olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.",
      p1: "Bu bilinçle, şirketimiz ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na ('KVKK') uygun olarak işlenmesine ve muhafaza edilmesine büyük önem vermekteyiz.",
      p2: "Kişisel verileriniz, şirketimiz tarafından sunulan konut projeleri, mühendislik hizmetleri ve ticari faaliyetlerin yürütülmesi süreçlerinde; yasal yükümlülüklerin yerine getirilmesi, taleplerinizin yanıtlanması ve sözleşme süreçlerinin yönetilmesi amaçlarıyla KVKK kapsamında işlenmektedir.",
      p3: "Kanun uyarınca verilerinizin silinmesini, düzeltilmesini isteme ve veri işleme süreçleri hakkında bilgi talep etme haklarına sahipsiniz. Başvurularınızı yazılı olarak şirket adresimize iletebilirsiniz."
    },
    EN: {
      tag: "LEGAL",
      title: "KVKK Clarification Text",
      subtitle: "Personal Data Protection Law",
      intro: "As ZCB Construction & Engineering, we attach maximum sensitivity to the security of your personal data.",
      p1: "With this awareness, we place great importance on processing and preserving all kinds of personal data belonging to all persons associated with our company in accordance with the Law on Protection of Personal Data No. 6698 ('KVKK').",
      p2: "Your personal data is processed by our company within the scope of KVKK for the purposes of performing residential projects, engineering services, executing commercial activities, fulfilling legal obligations, answering requests, and managing contract processes.",
      p3: "Under the law, you have the right to request deletion, correction of your data, and information about data processing. You can send your applications in writing to our corporate address."
    },
    RU: {
      tag: "ЮРИДИЧЕСКИЙ",
      title: "Политика Конфиденциальности (KVKK)",
      subtitle: "Закон об охране персональных данных",
      intro: "ZCB Строительство & Инжиниринг с максимальной ответственностью относится к безопасности ваших персональных данных.",
      p1: "С этим пониманием мы придаем большое значение обработке и сохранению всех видов персональных данных, принадлежащих всем лицам, связанным с нашей компанией, в соответствии с Законом об охране персональных данных № 6698 (KVKK).",
      p2: "Ваши персональные данные обрабатываются нашей компанией в рамках KVKK для целей реализации жилищных проектов, инженерных услуг, ведения коммерческой деятельности, выполнения юридических обязательств, ответов на запросы и управления контрактными процессами.",
      p3: "В соответствии с законом вы имеете право потребовать удаления, исправления ваших данных и информации об их обработке. Вы можете направить свои заявления в письменном виде по нашему юридическому адресу."
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
          {subtitle}
        </h3>
        <div style={{ lineHeight: '1.9', fontSize: '1.1rem', color: '#a5a9b4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {intro && (
            <p style={{ fontWeight: '500', color: 'var(--color-white)', fontSize: '1.2rem' }}>
              {intro}
            </p>
          )}
          {p1 && <p>{p1}</p>}
          {p2 && <p>{p2}</p>}
          {p3 && <p>{p3}</p>}
        </div>
      </div>
    </section>
  );
}
