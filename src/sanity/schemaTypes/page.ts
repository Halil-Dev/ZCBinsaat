import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Kurumsal & Yasal Sayfalar',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Sayfa Tanımlayıcısı (Slug)',
      type: 'slug',
      options: {
        source: 'titleTR',
      },
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
    // Subtitles
    defineField({
      name: 'subtitleTR',
      title: 'Alt Başlık (TR)',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEN',
      title: 'Alt Başlık (EN)',
      type: 'string',
    }),
    defineField({
      name: 'subtitleRU',
      title: 'Alt Başlık (RU)',
      type: 'string',
    }),
    // Intros
    defineField({
      name: 'introTR',
      title: 'Giriş Metni (TR)',
      type: 'text',
    }),
    defineField({
      name: 'introEN',
      title: 'Giriş Metni (EN)',
      type: 'text',
    }),
    defineField({
      name: 'introRU',
      title: 'Giriş Metni (RU)',
      type: 'text',
    }),
    // Paragraph 1
    defineField({
      name: 'p1TR',
      title: 'Paragraf 1 (TR)',
      type: 'text',
    }),
    defineField({
      name: 'p1EN',
      title: 'Paragraf 1 (EN)',
      type: 'text',
    }),
    defineField({
      name: 'p1RU',
      title: 'Paragraf 1 (RU)',
      type: 'text',
    }),
    // Paragraph 2
    defineField({
      name: 'p2TR',
      title: 'Paragraf 2 (TR)',
      type: 'text',
    }),
    defineField({
      name: 'p2EN',
      title: 'Paragraf 2 (EN)',
      type: 'text',
    }),
    defineField({
      name: 'p2RU',
      title: 'Paragraf 2 (RU)',
      type: 'text',
    }),
    // Paragraph 3
    defineField({
      name: 'p3TR',
      title: 'Paragraf 3 (TR)',
      type: 'text',
    }),
    defineField({
      name: 'p3EN',
      title: 'Paragraf 3 (EN)',
      type: 'text',
    }),
    defineField({
      name: 'p3RU',
      title: 'Paragraf 3 (RU)',
      type: 'text',
    }),
  ],
})
