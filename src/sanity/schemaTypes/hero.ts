import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Slaytları',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Slayt Arka Plan Görseli',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'tagTR',
      title: 'Slayt Etiketi (TR)',
      type: 'string',
    }),
    defineField({
      name: 'tagEN',
      title: 'Slayt Etiketi (EN)',
      type: 'string',
    }),
    defineField({
      name: 'tagRU',
      title: 'Slayt Etiketi (RU)',
      type: 'string',
    }),
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
    defineField({
      name: 'descTR',
      title: 'Açıklama (TR)',
      type: 'text',
    }),
    defineField({
      name: 'descEN',
      title: 'Açıklama (EN)',
      type: 'text',
    }),
    defineField({
      name: 'descRU',
      title: 'Açıklama (RU)',
      type: 'text',
    }),
  ],
})
