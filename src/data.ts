// Centralized Website Data & Translations for ZCB Emlak
// In the future, this data can be fetched from a headless CMS (like Sanity) by replacing this local object.

export interface LanguageDictionary {
  companyName: string;
  companyLogoText: string;
  menuBtn: string;
  menuHome: string;
  menuAbout: string;
  menuCatalog: string;
  menuGallery: string;
  menuContact: string;
  virtualTour: string;
  scrollDown: string;
  all: string;
  exterior: string;
  interior: string;
  social: string;
  aboutTag: string;
  aboutTitle: string;
  aboutLead: string;
  aboutText: string;
  aboutStatExperience: string;
  aboutStatFamilies: string;
  aboutStatDelivery: string;
  aboutOverlayTitle: string;
  aboutOverlayText: string;
  catalogTag: string;
  catalogTitle: string;
  catalogSubtitle: string;
  catalogTotalLabel: string;
  catalogTotalSuffix: string;
  catalogSummaryText: string;
  catalogDownloadPdf: string;
  catalogDownloadPresentation: string;
  catalogDownloadPptx: string;
  catalogPreparing: string;
  catalogPdfSuccessTitle: string;
  catalogPdfSuccessMsg: string;
  catalogBrut: string;
  catalogFacade: string;
  catalogBath: string;
  contactTag: string;
  contactTitle: string;
  contactSub: string;
  contactFormTitle: string;
  contactFormText: string;
  contactLabelName: string;
  contactLabelPhone: string;
  contactLabelEmail: string;
  contactLabelMessage: string;
  contactBtnSend: string;
  contactBtnSending: string;
  contactFollowUs: string;
  contactLabelPhoneTitle: string;
  contactLabelEmailTitle: string;
  contactLabelAddressTitle: string;
  footerDesc: string;
  footerTitleCorp: string;
  footerTitleProj: string;
  footerTitleLegal: string;
  footerLinkMission: string;
  footerLinkCareer: string;
  footerLinkKvkk: string;
  footerLinkCookies: string;
  footerLinkTerms: string;
  footerCatalog: string;
  footerCopyright: string;
  formSuccessTitle: string;
  formSuccessMsg: string;
  formErrorTitle: string;
  formErrorMsg: string;
  lightboxCategory: string;
  lightboxTitle: string;
}

export type SupportedLanguages = 'TR' | 'EN' | 'RU';

export interface ApartmentDetails {
  id: string;
  img: string;
  translations: Record<SupportedLanguages, {
    title: string;
    badge: string;
    area: string;
    facade: string;
    bath: string;
  }>;
}

export interface GalleryItem {
  image: string;
  category: string;
  translations: Record<SupportedLanguages, {
    title: string;
    label: string;
  }>;
}

export interface HeroSlide {
  image: string;
  tagKey: string;
  titleKey: string;
  descKey: string;
  btnOutlineKey: string;
  btnPrimaryKey: string;
}

export interface SiteData {
  languages: SupportedLanguages[];
  contactInfo: {
    phone: string;
    phoneRaw: string;
    email: string;
    address: string;
    googleMapsIframe: string;
    socials: {
      instagram: string;
      facebook: string;
      linkedin: string;
      youtube: string;
    };
  };
  translations: Record<SupportedLanguages, LanguageDictionary>;
  heroSlides: HeroSlide[];
  heroTranslations: Record<SupportedLanguages, Record<string, string>>;
  apartments: {
    totalCount: number;
    types: ApartmentDetails[];
  };
  galleryItems: GalleryItem[];
}

export const siteData: SiteData = {
    // Current available languages
    languages: ['TR', 'EN', 'RU'],
    
    // Contact Info & Socials (shared across languages or static)
    contactInfo: {
        phone: "+90 (242) 123 45 67",
        phoneRaw: "+902421234567",
        email: "info@zcbinsaat.com",
        address: "Yeşilbahçe Mah. Metin Kasapoğlu Cad. No: 42 D: 5, Muratpaşa / Antalya",
        googleMapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12763.504245648834!2d30.7188737678516!3d36.87823528243171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c390623fb8b03b%3A0xc3f83733077e6f8a!2sYe%C5%9Filbah%C3%A7e%2C%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1716200000000!5m2!1str!2str",
        socials: {
            instagram: "#",
            facebook: "#",
            linkedin: "#",
            youtube: "#"
        }
    },

    // Localization strings
    translations: {
        TR: {
            // General & Nav
            companyName: "ZCB İNŞAAT & MÜHENDİSLİK",
            companyLogoText: "İNŞAAT & MÜHENDİSLİK",
            menuBtn: "MENÜ",
            menuHome: "Anasayfa",
            menuAbout: "Hakkımızda",
            menuCatalog: "Daire Seçenekleri",
            menuGallery: "Galeri",
            menuContact: "Bize Ulaşın",
            virtualTour: "Sanal Tur",
            scrollDown: "Aşağı Kaydırın",
            all: "Tümü",
            exterior: "Dış Mimari",
            interior: "İç Mekan",
            social: "Sosyal Alanlar",

            // About Section
            aboutTag: "ZCB İNŞAAT & MÜHENDİSLİK",
            aboutTitle: "Geleceğin Mimarisini Mühendislik Gücüyle İnşa Ediyoruz",
            aboutLead: "ZCB İnşaat & Mühendislik olarak, modern şehircilik anlayışını estetik detaylar ve sarsılmaz mühendislik prensipleriyle birleştiriyoruz.",
            aboutText: "Antalya'nın çehresini değiştiren projelerimizde, sadece birer bina değil, güvenli, konforlu ve doğayla barışık yeni yaşam alanları inşa ediyoruz. Her detayında birinci sınıf malzemelerin ve kusursuz işçiliğin izini göreceğiniz konutlarımızla, yaşam standardınızı en üst seviyeye çıkarmayı hedefliyoruz.",
            aboutStatExperience: "Yıllık Deneyim",
            aboutStatFamilies: "Mutlu Aile",
            aboutStatDelivery: "Zamanında Teslim",
            aboutOverlayTitle: "Yüksek Mühendislik Standartları",
            aboutOverlayText: "Deprem yönetmeliğine tam uyumlu, kaya zemin analizleri yapılmış sağlam temeller.",

            // Catalog Section
            catalogTag: "PROJEMİZ",
            catalogTitle: "Satılık Lüks Daireler",
            catalogSubtitle: "Toplam 26 adet bağımsız bölümden oluşan, her ihtiyaca uygun özel planlanmış daire tipleri.",
            catalogTotalLabel: "TOPLAM",
            catalogTotalSuffix: "Eşsiz Daire",
            catalogSummaryText: "Projemiz modern mimari çizgileri, geniş peyzaj alanları, açık havuzu, otoparkı ve çocuk oyun alanları ile konforlu bir hayat sunuyor.",
            catalogDownloadPdf: "ZCB Proje Kataloğu (PDF)",
            catalogDownloadPresentation: "ZCB Firma Sunumu (PDF)",
            catalogDownloadPptx: "ZCB Tanıtım Dosyası (PPTX)",
            catalogPreparing: "Hazırlanıyor...",
            catalogPdfSuccessTitle: "Dosya İndirildi",
            catalogPdfSuccessMsg: "Belge başarıyla indirildi.",
            
            catalogBrut: "Brüt Alan",
            catalogFacade: "Cephe",
            catalogBath: "Banyo",

            // Contact Section
            contactTag: "İLETİŞİM",
            contactTitle: "Bizimle İletişime Geçin",
            contactSub: "ZCB İnşaat & Mühendislik satış ofisimize gelerek projelerimizi yakından inceleyebilir, aklınızdaki tüm soruları satış uzmanlarımıza yöneltebilirsiniz.",
            contactFormTitle: "Bilgi İstek Formu",
            contactFormText: "Aşağıdaki formu doldurarak projemiz ile ilgili detaylı bilgi, fiyat teklifleri ve güncel stok durumu hakkında bilgi alabilirsiniz.",
            contactLabelName: "Adınız Soyadınız",
            contactLabelPhone: "Telefon Numaranız",
            contactLabelEmail: "E-Posta Adresiniz",
            contactLabelMessage: "Mesajınız",
            contactBtnSend: "Gönder",
            contactBtnSending: "Gönderiliyor...",
            contactFollowUs: "Bizi Takip Edin",
            contactLabelPhoneTitle: "Telefon",
            contactLabelEmailTitle: "E-Posta",
            contactLabelAddressTitle: "Adres",

            // Footer
            footerDesc: "ZCB İnşaat & Mühendislik, Antalya genelinde modern mimari anlayışını estetik, güvenlik ve işlevsellik ile birleştirerek yüksek kalitede konut projeleri üretmektedir.",
            footerTitleCorp: "Kurumsal",
            footerTitleProj: "Projelerimiz",
            footerTitleLegal: "Yasal",
            footerLinkMission: "Vizyon & Misyon",
            footerLinkCareer: "Kariyer",
            footerLinkKvkk: "KVKK Aydınlatma Metni",
            footerLinkCookies: "Çerez Politikası",
            footerLinkTerms: "Kullanım Koşulları",
            footerCatalog: "Katalog",
            footerCopyright: "© 2026 ZCB İnşaat & Mühendislik. Tüm Hakları Saklıdır. Tasarım ve Geliştirme.",

            // Forms & Toast
            formSuccessTitle: "Mesajınız İletildi!",
            formSuccessMsg: "Talebiniz başarıyla alındı. Satış ofisimiz en kısa sürede sizinle iletişime geçecektir.",
            formErrorTitle: "Hata!",
            formErrorMsg: "Lütfen tüm zorunlu alanları doldurun.",
            
            // Lightbox
            lightboxCategory: "Kategori",
            lightboxTitle: "Görsel Başlığı"
        },
        EN: {
            // General & Nav
            companyName: "ZCB CONSTRUCTION & ENGINEERING",
            companyLogoText: "CONSTRUCTION & ENGINEERING",
            menuBtn: "MENU",
            menuHome: "Home",
            menuAbout: "About Us",
            menuCatalog: "Apartment Options",
            menuGallery: "Gallery",
            menuContact: "Contact Us",
            virtualTour: "Virtual Tour",
            scrollDown: "Scroll Down",
            all: "All",
            exterior: "Exterior",
            interior: "Interior",
            social: "Social Areas",

            // About Section
            aboutTag: "ZCB CONSTRUCTION & ENGINEERING",
            aboutTitle: "We Build Future Architecture with Engineering Strength",
            aboutLead: "As ZCB Construction & Engineering, we combine modern urbanism with aesthetic details and unshakable engineering principles.",
            aboutText: "In our projects that change the face of Antalya, we build not just buildings, but safe, comfortable, and nature-friendly new living spaces. We aim to raise your standard of living to the highest level with our residences, where you will see traces of premium materials and flawless craftsmanship in every detail.",
            aboutStatExperience: "Years of Experience",
            aboutStatFamilies: "Happy Families",
            aboutStatDelivery: "On-Time Delivery",
            aboutOverlayTitle: "High Engineering Standards",
            aboutOverlayText: "Fully compliant with earthquake regulations, solid foundations with rock ground analysis.",

            // Catalog Section
            catalogTag: "OUR PROJECT",
            catalogTitle: "Luxury Apartments for Sale",
            catalogSubtitle: "A total of 26 independent sections, specially planned apartment types for every need.",
            catalogTotalLabel: "TOTAL",
            catalogTotalSuffix: "Unique Units",
            catalogSummaryText: "Our project offers a comfortable life with its modern architectural lines, large landscaped areas, open pool, parking lot, and children's playgrounds.",
            catalogDownloadPdf: "ZCB Project Catalog (PDF)",
            catalogDownloadPresentation: "ZCB Presentation (PDF)",
            catalogDownloadPptx: "ZCB Presentation (PPTX)",
            catalogPreparing: "Preparing...",
            catalogPdfSuccessTitle: "Downloaded Successfully",
            catalogPdfSuccessMsg: "The catalog file has been downloaded.",
            
            catalogBrut: "Gross Area",
            catalogFacade: "Facade",
            catalogBath: "Bathrooms",

            // Contact Section
            contactTag: "CONTACT",
            contactTitle: "Get In Touch With Us",
            contactSub: "You can visit our ZCB Construction & Engineering sales office to inspect our projects closely and ask our sales experts any questions you have.",
            contactFormTitle: "Information Request Form",
            contactFormText: "By filling out the form below, you can get detailed information, price offers, and current stock availability about our project.",
            contactLabelName: "Your Name Surname",
            contactLabelPhone: "Your Phone Number",
            contactLabelEmail: "Your Email Address",
            contactLabelMessage: "Your Message",
            contactBtnSend: "Send",
            contactBtnSending: "Sending...",
            contactFollowUs: "Follow Us",
            contactLabelPhoneTitle: "Phone",
            contactLabelEmailTitle: "E-Mail",
            contactLabelAddressTitle: "Address",

            // Footer
            footerDesc: "ZCB Construction & Engineering produces high-quality residential projects by combining modern architecture with aesthetics, safety, and functionality across Antalya.",
            footerTitleCorp: "Corporate",
            footerTitleProj: "Our Projects",
            footerTitleLegal: "Legal",
            footerLinkMission: "Vision & Mission",
            footerLinkCareer: "Careers",
            footerLinkKvkk: "KVKK Clarification Text",
            footerLinkCookies: "Cookie Policy",
            footerLinkTerms: "Terms of Use",
            footerCatalog: "Catalog",
            footerCopyright: "© 2026 ZCB Construction & Engineering. All Rights Reserved. Design and Development.",

            // Forms & Toast
            formSuccessTitle: "Message Sent!",
            formSuccessMsg: "Your request has been successfully received. Our sales office will contact you as soon as possible.",
            formErrorTitle: "Error!",
            formErrorMsg: "Please fill in all required fields.",

            // Lightbox
            lightboxCategory: "Category",
            lightboxTitle: "Image Title"
        },
        RU: {
            // General & Nav
            companyName: "ZCB СТРОИТЕЛЬСТВО & ИНЖИНИРИНГ",
            companyLogoText: "СТРОИТЕЛЬСТВО & ИНЖИНИРИНГ",
            menuBtn: "МЕНЮ",
            menuHome: "Главная",
            menuAbout: "О нас",
            menuCatalog: "Варианты Квартир",
            menuGallery: "Галерея",
            menuContact: "Контакты",
            virtualTour: "3D Тур",
            scrollDown: "Прокрутите вниз",
            all: "Все",
            exterior: "Экстерьер",
            interior: "Интерьер",
            social: "Общественные зоны",

            // About Section
            aboutTag: "ZCB СТРОИТЕЛЬСТВО & ИНЖИНИРИНГ",
            aboutTitle: "Мы строим архитектуру будущего с инженерной точностью",
            aboutLead: "ZCB Строительство & Инжиниринг объединяет современную урбанистику с эстетическими деталями и надежными инженерными принципами.",
            aboutText: "В наших проектах, меняющих облик Анталии, мы строим не просто здания, а безопасные, комфортные и экологичные жилые пространства. Мы стремимся поднять ваш уровень жизни на новую высоту с нашими резиденциями, где в каждой детали видны следы материалов премиум-класса и безупречного мастерства.",
            aboutStatExperience: "Лет Опыта",
            aboutStatFamilies: "Счастливых Семей",
            aboutStatDelivery: "Сдача в Срок",
            aboutOverlayTitle: "Высокие инженерные стандарты",
            aboutOverlayText: "Полное соответствие сейсмическим нормам, прочный фундамент на основе анализа скального грунта.",

            // Catalog Section
            catalogTag: "НАШ ПРОЕКТ",
            catalogTitle: "Элитные Квартиры на Продажу",
            catalogSubtitle: "В общей сложности 26 независимых секций, специально спланированные типы квартир для любых нужд.",
            catalogTotalLabel: "ВСЕГО",
            catalogTotalSuffix: "Уникальных Квартир",
            catalogSummaryText: "Наш проект предлагает комфортную жизнь благодаря современным архитектурным линиям, просторным ландшафтным зонам, открытому бассейну, парковке и детским площадкам.",
            catalogDownloadPdf: "ZCB Проектный Каталог (PDF)",
            catalogDownloadPresentation: "ZCB Презентация (PDF)",
            catalogDownloadPptx: "ZCB Презентация (PPTX)",
            catalogPreparing: "Подготовка...",
            catalogPdfSuccessTitle: "Скачано Успешно",
            catalogPdfSuccessMsg: "Файл успешно загружен.",
            
            catalogBrut: "Общая площадь",
            catalogFacade: "Фасад",
            catalogBath: "Санузлы",

            // Contact Section
            contactTag: "КОНТАКТЫ",
            contactTitle: "Свяжитесь с Нами",
            contactSub: "Вы можете посетить наш офис продаж ZCB Строительство & Инжиниринг, чтобы поближе ознакомиться с проектами и задать любые вопросы нашим специалистам.",
            contactFormTitle: "Форма Запроса Информации",
            contactFormText: "Заполнив форму ниже, вы можете получить подробную информацию о нашем проекте, ценовых предложениях и наличии свободных квартир.",
            contactLabelName: "Ваше Имя и Фамилия",
            contactLabelPhone: "Номер Телефона",
            contactLabelEmail: "Адрес Электронной Почты",
            contactLabelMessage: "Ваше Сообщение",
            contactBtnSend: "Отправить",
            contactBtnSending: "Отправка...",
            contactFollowUs: "Подписывайтесь на Нас",
            contactLabelPhoneTitle: "Телефон",
            contactLabelEmailTitle: "Эл. Почта",
            contactLabelAddressTitle: "Адрес",

            // Footer
            footerDesc: "ZCB Строительство & Инжиниринг создает высококачественные жилые проекты по всей Анталии, сочетая современную архитектуру с эстетикой, безопасностью и функциональностью.",
            footerTitleCorp: "Компания",
            footerTitleProj: "Наши Проекты",
            footerTitleLegal: "Юридическая инф.",
            footerLinkMission: "Видение и Миссия",
            footerLinkCareer: "Карьера",
            footerLinkKvkk: "Политика конфиденциальности",
            footerLinkCookies: "Политика использования файлов cookie",
            footerLinkTerms: "Условия использования",
            footerCatalog: "Каталог",
            footerCopyright: "© 2026 ZCB Строительство & Инжиниринг. Все права защищены. Дизайн и Разработка.",

            // Forms & Toast
            formSuccessTitle: "Сообщение Отправлено!",
            formSuccessMsg: "Ваш запрос был успешно получен. Наш офис продаж свяжется с вами в ближайшее время.",
            formErrorTitle: "Ошибка!",
            formErrorMsg: "Пожалуйста, заполните все обязательные поля.",

            // Lightbox
            lightboxCategory: "Категория",
            lightboxTitle: "Название картинки"
        }
    },

    // Dynamic Hero Slides
    heroSlides: [
        {
            image: "assets/hero_1.png",
            tagKey: "aboutTag",
            titleKey: "hero1Title",
            descKey: "hero1Desc",
            btnOutlineKey: "menuCatalog",
            btnPrimaryKey: "getAQuote"
        },
        {
            image: "assets/hero_2.png",
            tagKey: "hero2Tag",
            titleKey: "hero2Title",
            descKey: "hero2Desc",
            btnOutlineKey: "menuGallery",
            btnPrimaryKey: "menuCatalog"
        }
    ],

    heroTranslations: {
        TR: {
            hero1Title: "ZCB ile Modern Yaşamın Zirvesi",
            hero1Desc: "Antalya'nın en seçkin noktasında, benzersiz mimarisi ve üstün mühendislik kalitesiyle yükselen yeni yaşam merkeziniz.",
            hero2Tag: "ZARİF & PRESTİJLİ",
            hero2Title: "İç Mekanda Kusursuz Konfor",
            hero2Desc: "Birinci sınıf malzemeler ve estetik tasarımın mükemmel uyumuyla hayat bulan, konforunuz için tasarlanmış prestijli detaylar.",
            getAQuote: "Bilgi Alın"
        },
        EN: {
            hero1Title: "The Peak of Modern Living with ZCB",
            hero1Desc: "Your new living center rising in Antalya's most exclusive location with unique architecture and superior engineering quality.",
            hero2Tag: "ELEGANT & PRESTIGIOUS",
            hero2Title: "Flawless Comfort Indoors",
            hero2Desc: "Prestigious details designed for your comfort, brought to life through the perfect harmony of premium materials and aesthetic design.",
            getAQuote: "Get Info"
        },
        RU: {
            hero1Title: "Пик Современной Жизни с ZCB",
            hero1Desc: "Ваш новый центр жизни, возвышающийся в самом эксклюзивном районе Анталии, с уникальной архитектурой и высоким инженерным качеством.",
            hero2Tag: "ИЗЫСКАННЫЙ И ПРЕСТИЖНЫЙ",
            hero2Title: "Безупречный Комфорт в Интерьере",
            hero2Desc: "Престижные детали, созданные для вашего комфорта, воплощенные в жизнь благодаря гармонии материалов премиум-класса и эстетичного дизайна.",
            getAQuote: "Инфо"
        }
    },

    // Apartment catalog details
    apartments: {
        totalCount: 26,
        types: [
            {
                id: "upper-4-1",
                img: "/assets/floor_plan.png",
                translations: {
                    TR: {
                        title: "Üst Dubleks Daireler",
                        badge: "4+1 Dubleks",
                        area: "185 m²",
                        facade: "Güney-Doğu",
                        bath: "3 Adet"
                    },
                    EN: {
                        title: "Upper Duplex Apartments",
                        badge: "4+1 Duplex",
                        area: "185 m²",
                        facade: "South-East",
                        bath: "3 Baths"
                    },
                    RU: {
                        title: "Верхние Дуплексы",
                        badge: "4+1 Дуплекс",
                        area: "185 м²",
                        facade: "Юго-Восток",
                        bath: "3 Санузла"
                    }
                }
            },
            {
                id: "upper-3-1",
                img: "/assets/floor_plan.png",
                translations: {
                    TR: {
                        title: "Üst Dubleks Daireler",
                        badge: "3+1 Dubleks",
                        area: "155 m²",
                        facade: "Kuzey-Batı",
                        bath: "2 Adet"
                    },
                    EN: {
                        title: "Upper Duplex Apartments",
                        badge: "3+1 Duplex",
                        area: "155 m²",
                        facade: "North-West",
                        bath: "2 Baths"
                    },
                    RU: {
                        title: "Верхние Дуплексы",
                        badge: "3+1 Дуплекс",
                        area: "155 м²",
                        facade: "Северо-Запад",
                        bath: "2 Санузла"
                    }
                }
            },
            {
                id: "middle-2-1",
                img: "/assets/floor_plan.png",
                translations: {
                    TR: {
                        title: "Ara Kat Konfor Daireler",
                        badge: "2+1 Standart",
                        area: "115 m²",
                        facade: "Güney-Batı",
                        bath: "2 Adet"
                    },
                    EN: {
                        title: "Middle Floor Comfort Apartments",
                        badge: "2+1 Standard",
                        area: "115 m²",
                        facade: "South-West",
                        bath: "2 Baths"
                    },
                    RU: {
                        title: "Квартиры на Среднем Этаже",
                        badge: "2+1 Стандарт",
                        area: "115 м²",
                        facade: "Юго-Запад",
                        bath: "2 Санузла"
                    }
                }
            },
            {
                id: "garden-2-1-dub",
                img: "/assets/floor_plan.png",
                translations: {
                    TR: {
                        title: "Bahçe Dubleks Daireler",
                        badge: "2+1 Dubleks",
                        area: "130 m²",
                        facade: "Kuzey-Doğu",
                        bath: "2 Adet"
                    },
                    EN: {
                        title: "Garden Duplex Apartments",
                        badge: "2+1 Duplex",
                        area: "130 m²",
                        facade: "North-East",
                        bath: "2 Baths"
                    },
                    RU: {
                        title: "Садовые Дуплексы",
                        badge: "2+1 Дуплекс",
                        area: "130 м²",
                        facade: "Северо-Восток",
                        bath: "2 Санузла"
                    }
                }
            },
            {
                id: "garden-2-1",
                img: "/assets/floor_plan.png",
                translations: {
                    TR: {
                        title: "Bahçe Katı Daireler",
                        badge: "2+1 Standart",
                        area: "95 m²",
                        facade: "Güney-Doğu",
                        bath: "1 Adet"
                    },
                    EN: {
                        title: "Garden Floor Apartments",
                        badge: "2+1 Standard",
                        area: "95 m²",
                        facade: "South-East",
                        bath: "1 Bath"
                    },
                    RU: {
                        title: "Квартиры на Садовом Этаже",
                        badge: "2+1 Стандарт",
                        area: "95 м²",
                        facade: "Юго-Восток",
                        bath: "1 Санузел"
                    }
                }
            }
        ]
    },

    // Gallery Items
    galleryItems: [
        {
            image: "/assets/hero_1.png",
            category: "exterior",
            translations: {
                TR: { title: "Dış Cephe ve Havuz Alanı", label: "Dış Mimari" },
                EN: { title: "Exterior Facade and Pool Area", label: "Exterior" },
                RU: { title: "Внешний Фасад и Зона Бассейна", label: "Экстерьер" }
            }
        },
        {
            image: "/assets/hero_2.png",
            category: "interior",
            translations: {
                TR: { title: "Lüks ve Ferah İç Mekan", label: "İç Mekan" },
                EN: { title: "Luxury and Spacious Interior", label: "Interior" },
                RU: { title: "Роскошный и Просторный Интерьер", label: "Интерьер" }
            }
        },
        {
            image: "/assets/about.png",
            category: "exterior",
            translations: {
                TR: { title: "Modern Cephe Tasarımı", label: "Dış Mimari" },
                EN: { title: "Modern Facade Design", label: "Exterior" },
                RU: { title: "Современный Дизайн Фасада", label: "Экстерьер" }
            }
        },
        {
            image: "/assets/gallery_1.png",
            category: "social",
            translations: {
                TR: { title: "Şık Karşılama Lobisi", label: "Sosyal Alanlar" },
                EN: { title: "Elegant Reception Lobby", label: "Social Areas" },
                RU: { title: "Стильный Ресепшн-Лобби", label: "Общественные зоны" }
            }
        },
        {
            image: "/assets/gallery_2.png",
            category: "social",
            translations: {
                TR: { title: "Bahçe Peyzajı ve Dinlenme Alanı", label: "Sosyal Alanlar" },
                EN: { title: "Garden Landscaping & Relaxation Area", label: "Social Areas" },
                RU: { title: "Садовый Ландшафт и Зона Отдыха", label: "Общественные зоны" }
            }
        }
    ]
};
