# Mimari ve Özellikler

Bu doküman, Enterprise Fleet System projesinin mimarisini ve temel özelliklerini açıklar.

## Genel Bakış
Enterprise Fleet System, filo yönetimi ve araç takibi için geliştirilmiş modern bir web uygulamasıdır. Next.js ve TypeScript ile geliştirilmiştir. Kullanıcı dostu arayüzü ile filo operasyonlarını kolaylaştırır.

## Temel Özellikler
- Araç yönetimi
- Sürücü yönetimi
- Bakım takvimi
- Finansal analiz ve raporlama
- Filo sağlık durumu izleme
- Özelleştirilebilir ayarlar

## Mimari Yapı
- **Next.js**: Sunucu tarafı render ve modern frontend mimarisi.
- **TypeScript**: Tip güvenliği ve daha sağlam kod.
- **React**: Bileşen tabanlı kullanıcı arayüzü.
- **Tailwind CSS**: Hızlı ve esnek stil oluşturma.

### Klasör Yapısı
- `src/app/` : Sayfalar (dashboard, araçlar, sürücüler, raporlar, ayarlar)
- `src/components/` : Tekrar kullanılabilir arayüz bileşenleri
- `src/constants/` : Sabitler ve mock veriler
- `src/context/` : Context sağlayıcıları
- `src/hooks/` : Özel React hook'ları
- `src/lib/` : Yardımcı fonksiyonlar

### Modüller
- **Araçlar**: Araç ekleme, düzenleme, listeleme
- **Sürücüler**: Sürücü ekleme, düzenleme, araç atama
- **Bakım Takvimi**: Bakım ve servis işlemlerinin takibi
- **Raporlar**: Filo maliyetleri, sağlık durumu ve finansal analiz
- **Ayarlar**: Kullanıcı ve sistem ayarları

## Genişletilebilirlik
- Yeni modüller ve bileşenler kolayca eklenebilir.
- API entegrasyonları ve veri tabanı bağlantıları için hazır altyapı.

## Kullanım
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/kursatdemirdelen/enterprise-fleet-system.git
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

## Lisans
MIT