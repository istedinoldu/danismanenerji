export const SITE = {
  name: 'Danışman Enerji',
  legalName: 'Danışman Enerji Ltd. Şti.',
  url: 'https://danismanenerji.com.tr',
  description: 'Ankara ve Türkiye genelinde güvenilir GES kurulumu, GES panel temizliği ve profesyonel elektrik işleri.',
  phone: '+90 531 689 87 47',
  phoneRaw: '+905316898747',
  whatsapp: 'https://wa.me/905316898747',
  email: 'info@danismanenerji.com.tr',
  secondaryEmail: 's.danisman@danismanenerji.com',
  address: {
    street: 'Süvari Mah. Çınar Cad. Yusuf Apt. No:44/12',
    district: 'Etimesgut',
    city: 'Ankara',
    country: 'TR',
  },
  nav: [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda/' },
    { label: 'Hizmetler', href: '/hizmetler/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'İletişim', href: '/iletisim/' },
  ],
} as const;
