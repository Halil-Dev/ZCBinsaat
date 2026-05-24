'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function KvkkPage() {
  const { language } = useLanguage();

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
          <p style={{ fontWeight: '500', color: 'var(--color-white)', fontSize: '1.2rem' }}>
            {active.intro}
          </p>
          <p>{active.p1}</p>
          <p>{active.p2}</p>
          <p>{active.p3}</p>
        </div>
      </div>
    </section>
  );
}
