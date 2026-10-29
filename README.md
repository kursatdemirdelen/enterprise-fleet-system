# Enterprise Fleet System

Filo yönetimi ve araç takibi için Next.js ile geliştirilmiş modern bir web uygulaması. Araçlar, sürücüler, bakım takvimi ve raporlar tek bir panelde toplanır.

> Bu bir demo projedir. Veriler `src/constants/mockData.ts` içindeki örnek verilerden gelir, gerçek bir arka uç bağlı değildir.

## Özellikler

- **Panel:** Filo özeti, kritik uyarılar, maliyet grafiği, finansal göstergeler ve son aktiviteler.
- **Araçlar:** Arama destekli araç listesi, araç detayı, düzenleme ve yeni araç ekleme. Araç özellikleri, yakıt analizi ve atanan sürücü bilgisi.
- **Sürücüler:** Sürücü listesi ve detayı, yeni sürücü ekleme, sürücüye araç atama.
- **Bakım takvimi:** Bakım ve muayene olaylarını takvim üzerinde planlama ve günlük olay paneli.
- **Raporlar:** Gider grafiği, filo sağlık durumu ve finansal analiz.
- **Ayarlar:** Profil, bildirim ve güvenlik tercihleri. Demo için çalışma modu değiştirilebilir, seçilen moda göre menü ve modüller güncellenir.

## Kullanılan Teknolojiler

- [Next.js](https://nextjs.org/) (App Router) ve React
- TypeScript
- Tailwind CSS v4
- Radix UI bileşenleri
- Recharts (grafikler)
- Framer Motion (animasyonlar)
- date-fns ve react-day-picker (takvim)

## Kurulum

```bash
git clone https://github.com/kursatdemirdelen/enterprise-fleet-system.git
cd enterprise-fleet-system
npm install
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılır.

Üretim derlemesi için:

```bash
npm run build
npm start
```

## Klasör Yapısı

- `src/app/` – Sayfalar (panel, araçlar, sürücüler, takvim, raporlar, ayarlar)
- `src/components/` – Arayüz bileşenleri
- `src/constants/` – Sabitler ve örnek veriler
- `src/context/` – Context sağlayıcıları
- `src/hooks/` – Özel React hook'ları
- `src/lib/` – Yardımcı fonksiyonlar

Mimarinin ayrıntıları için [MIMARI.md](MIMARI.md) dosyasına bakabilirsiniz.

## Katkı

Katkıda bulunmak için bir fork oluşturup pull request gönderebilirsiniz. Hata ve önerileri Issues bölümünden iletebilirsiniz.

## Lisans

[MIT](LICENSE)
