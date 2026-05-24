import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'apartment',
  title: 'Daire Planları',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Benzersiz ID (slug)',
      type: 'slug',
      options: { source: 'titleTR' }
    }),
    defineField({
      name: 'img',
      title: 'Kat Planı Görseli',
      type: 'image',
      options: { hotspot: true }
    }),
    // Turkish Spec Translations
    defineField({
      name: 'titleTR',
      title: 'Daire Başlığı (TR)',
      type: 'string',
    }),
    defineField({
      name: 'badgeTR',
      title: 'Oda Tipi (TR)',
      type: 'string',
      description: 'Örn: 3+1 Dubleks'
    }),
    defineField({
      name: 'areaTR',
      title: 'Brüt Alan (TR)',
      type: 'string',
      description: 'Örn: 185 m²'
    }),
    defineField({
      name: 'facadeTR',
      title: 'Cephe (TR)',
      type: 'string',
      description: 'Örn: Güney-Doğu'
    }),
    defineField({
      name: 'bathTR',
      title: 'Banyo Sayısı (TR)',
      type: 'string',
      description: 'Örn: 3 Adet'
    }),
    // English Spec Translations
    defineField({
      name: 'titleEN',
      title: 'Daire Başlığı (EN)',
      type: 'string',
    }),
    defineField({
      name: 'badgeEN',
      title: 'Oda Tipi (EN)',
      type: 'string',
    }),
    defineField({
      name: 'areaEN',
      title: 'Brüt Alan (EN)',
      type: 'string',
    }),
    defineField({
      name: 'facadeEN',
      title: 'Cephe (EN)',
      type: 'string',
    }),
    defineField({
      name: 'bathEN',
      title: 'Banyo Sayısı (EN)',
      type: 'string',
    }),
    // Russian Spec Translations
    defineField({
      name: 'titleRU',
      title: 'Daire Başlığı (RU)',
      type: 'string',
    }),
    defineField({
      name: 'badgeRU',
      title: 'Oda Tipi (RU)',
      type: 'string',
    }),
    defineField({
      name: 'areaRU',
      title: 'Brüt Alan (RU)',
      type: 'string',
    }),
    defineField({
      name: 'facadeRU',
      title: 'Cephe (RU)',
      type: 'string',
    }),
    defineField({
      name: 'bathRU',
      title: 'Banyo Sayısı (RU)',
      type: 'string',
    }),
  ],
})
