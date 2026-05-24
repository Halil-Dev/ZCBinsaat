import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Genel Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Telefon Numarası (Görünen)',
      type: 'string',
    }),
    defineField({
      name: 'phoneRaw',
      title: 'Telefon Numarası (Link - Boşluksuz)',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-Posta Adresi',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      type: 'text',
    }),
    defineField({
      name: 'googleMapsIframe',
      title: 'Google Haritalar Embed Linki',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Linki',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Linki',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Linki',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube Linki',
      type: 'url',
    }),
  ],
})
