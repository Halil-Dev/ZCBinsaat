import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Galeri Fotoğrafları',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Galeri Görseli',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Dış Mimari', value: 'exterior' },
          { title: 'İç Mekan', value: 'interior' },
          { title: 'Sosyal Alanlar', value: 'social' }
        ]
      }
    }),
    defineField({
      name: 'titleTR',
      title: 'Açıklama (TR)',
      type: 'string',
    }),
    defineField({
      name: 'titleEN',
      title: 'Açıklama (EN)',
      type: 'string',
    }),
    defineField({
      name: 'titleRU',
      title: 'Açıklama (RU)',
      type: 'string',
    }),
  ],
})
