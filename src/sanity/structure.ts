import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('ZCB İçerik Yönetimi')
    .items([
      // Site Genel Ayarlarını Singleton (Tekil) yapıyoruz
      S.listItem()
        .title('Site Genel Ayarları')
        .id('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Site Genel Ayarları')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings'].includes(listItem.getId()!)
      ),
    ])
