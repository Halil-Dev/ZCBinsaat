import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Hakkımızda Bölümü',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Hakkımızda Görseli',
      type: 'image',
      options: { hotspot: true }
    }),
    // Tags
    defineField({
      name: 'tagTR',
      title: 'Etiket (TR)',
      type: 'string',
    }),
    defineField({
      name: 'tagEN',
      title: 'Etiket (EN)',
      type: 'string',
    }),
    defineField({
      name: 'tagRU',
      title: 'Etiket (RU)',
      type: 'string',
    }),
    // Titles
    defineField({
      name: 'titleTR',
      title: 'Başlık (TR)',
      type: 'string',
    }),
    defineField({
      name: 'titleEN',
      title: 'Başlık (EN)',
      type: 'string',
    }),
    defineField({
      name: 'titleRU',
      title: 'Başlık (RU)',
      type: 'string',
    }),
    // Leads
    defineField({
      name: 'leadTR',
      title: 'Giriş Metni (TR)',
      type: 'text',
    }),
    defineField({
      name: 'leadEN',
      title: 'Giriş Metni (EN)',
      type: 'text',
    }),
    defineField({
      name: 'leadRU',
      title: 'Giriş Metni (RU)',
      type: 'text',
    }),
    // Texts
    defineField({
      name: 'textTR',
      title: 'Açıklama Metni (TR)',
      type: 'text',
    }),
    defineField({
      name: 'textEN',
      title: 'Açıklama Metni (EN)',
      type: 'text',
    }),
    defineField({
      name: 'textRU',
      title: 'Açıklama Metni (RU)',
      type: 'text',
    }),
    // Overlay (Engineering Standard)
    defineField({
      name: 'overlayTitleTR',
      title: 'Görsel Üstü Başlık (TR)',
      type: 'string',
    }),
    defineField({
      name: 'overlayTitleEN',
      title: 'Görsel Üstü Başlık (EN)',
      type: 'string',
    }),
    defineField({
      name: 'overlayTitleRU',
      title: 'Görsel Üstü Başlık (RU)',
      type: 'string',
    }),
    defineField({
      name: 'overlayTextTR',
      title: 'Görsel Üstü Açıklama (TR)',
      type: 'text',
    }),
    defineField({
      name: 'overlayTextEN',
      title: 'Görsel Üstü Açıklama (EN)',
      type: 'text',
    }),
    defineField({
      name: 'overlayTextRU',
      title: 'Görsel Üstü Açıklama (RU)',
      type: 'text',
    }),
    // Stat 1: Experience
    defineField({
      name: 'statExperienceVal',
      title: 'İstatistik 1 Değer (Örn: 10+)',
      type: 'string',
    }),
    defineField({
      name: 'statExperienceLabelTR',
      title: 'İstatistik 1 Etiket (TR)',
      type: 'string',
    }),
    defineField({
      name: 'statExperienceLabelEN',
      title: 'İstatistik 1 Etiket (EN)',
      type: 'string',
    }),
    defineField({
      name: 'statExperienceLabelRU',
      title: 'İstatistik 1 Etiket (RU)',
      type: 'string',
    }),
    // Stat 2: Families
    defineField({
      name: 'statFamiliesVal',
      title: 'İstatistik 2 Değer (Örn: 500+)',
      type: 'string',
    }),
    defineField({
      name: 'statFamiliesLabelTR',
      title: 'İstatistik 2 Etiket (TR)',
      type: 'string',
    }),
    defineField({
      name: 'statFamiliesLabelEN',
      title: 'İstatistik 2 Etiket (EN)',
      type: 'string',
    }),
    defineField({
      name: 'statFamiliesLabelRU',
      title: 'İstatistik 2 Etiket (RU)',
      type: 'string',
    }),
    // Stat 3: Delivery
    defineField({
      name: 'statDeliveryVal',
      title: 'İstatistik 3 Değer (Örn: 100%)',
      type: 'string',
    }),
    defineField({
      name: 'statDeliveryLabelTR',
      title: 'İstatistik 3 Etiket (TR)',
      type: 'string',
    }),
    defineField({
      name: 'statDeliveryLabelEN',
      title: 'İstatistik 3 Etiket (EN)',
      type: 'string',
    }),
    defineField({
      name: 'statDeliveryLabelRU',
      title: 'İstatistik 3 Etiket (RU)',
      type: 'string',
    }),
  ],
})
