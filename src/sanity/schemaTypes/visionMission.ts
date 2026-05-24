import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'visionMission',
  title: 'Vizyon & Misyon Sayfası',
  type: 'document',
  fields: [
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
    // Vision
    defineField({
      name: 'visionTitleTR',
      title: 'Vizyon Başlığı (TR)',
      type: 'string',
    }),
    defineField({
      name: 'visionTitleEN',
      title: 'Vizyon Başlığı (EN)',
      type: 'string',
    }),
    defineField({
      name: 'visionTitleRU',
      title: 'Vizyon Başlığı (RU)',
      type: 'string',
    }),
    defineField({
      name: 'visionTextTR',
      title: 'Vizyon Açıklaması (TR)',
      type: 'text',
    }),
    defineField({
      name: 'visionTextEN',
      title: 'Vizyon Açıklaması (EN)',
      type: 'text',
    }),
    defineField({
      name: 'visionTextRU',
      title: 'Vizyon Açıklaması (RU)',
      type: 'text',
    }),
    // Mission
    defineField({
      name: 'missionTitleTR',
      title: 'Misyon Başlığı (TR)',
      type: 'string',
    }),
    defineField({
      name: 'missionTitleEN',
      title: 'Misyon Başlığı (EN)',
      type: 'string',
    }),
    defineField({
      name: 'missionTitleRU',
      title: 'Misyon Başlığı (RU)',
      type: 'string',
    }),
    defineField({
      name: 'missionTextTR',
      title: 'Misyon Açıklaması (TR)',
      type: 'text',
    }),
    defineField({
      name: 'missionTextEN',
      title: 'Misyon Açıklaması (EN)',
      type: 'text',
    }),
    defineField({
      name: 'missionTextRU',
      title: 'Misyon Açıklaması (RU)',
      type: 'text',
    }),
    // Values Title
    defineField({
      name: 'valuesTitleTR',
      title: 'Değerlerimiz Başlığı (TR)',
      type: 'string',
    }),
    defineField({
      name: 'valuesTitleEN',
      title: 'Değerlerimiz Başlığı (EN)',
      type: 'string',
    }),
    defineField({
      name: 'valuesTitleRU',
      title: 'Değerlerimiz Başlığı (RU)',
      type: 'string',
    }),
    // Values List
    defineField({
      name: 'valuesList',
      title: 'Değerlerimiz Listesi',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valueItem',
          title: 'Değer Maddesi',
          fields: [
            { name: 'titleTR', type: 'string', title: 'Başlık (TR)' },
            { name: 'titleEN', type: 'string', title: 'Başlık (EN)' },
            { name: 'titleRU', type: 'string', title: 'Başlık (RU)' },
            { name: 'descTR', type: 'text', title: 'Açıklama (TR)' },
            { name: 'descEN', type: 'text', title: 'Açıklama (EN)' },
            { name: 'descRU', type: 'text', title: 'Açıklama (RU)' },
          ],
        },
      ],
    }),
  ],
})
