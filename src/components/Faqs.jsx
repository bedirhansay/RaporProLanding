import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'RaporPro tüm araç markaları için uygun mu?',
      answer:
        'Evet, RaporPro tüm araç markaları için özelleştirilmiş şablonlar ve detaylı analiz araçları sunmaktadır.',
    },
    {
      question: 'Abonelik ücretini nasıl ödeyebilirim?',
      answer: 'Kredi kartı, havale/EFT ve mail order yöntemleriyle ödeme yapabilirsiniz. Kurumsal müşterilerimiz için fatura kesim sonrası ödeme seçeneği de mevcuttur.',
    },
    {
      question: 'RaporPro ekibinde çalışmak istiyorum, nasıl başvurabilirim?',
      answer:
        'Kariyer sayfamızdan açık pozisyonları inceleyebilir ve başvurunuzu online olarak yapabilirsiniz.',
    },
  ],
  [
    {
      question: 'Raporları farklı formatlarda alabilir miyim?',
      answer:
        'Evet, tüm raporlarınızı PDF, Excel ve yazdırılabilir formatta alabilirsiniz. Ayrıca kurumsal müşterilerimiz için özel rapor formatları da oluşturabiliyoruz.',
    },
    {
      question: 'Sistemde kaç kullanıcı tanımlayabilirim?',
      answer:
        'Paketinize göre değişmekle birlikte, Profesyonel pakette 5, Kurumsal pakette sınırsız kullanıcı tanımlayabilirsiniz.',
    },
    {
      question: 'Geçmiş raporlara erişebilir miyim?',
      answer:
        'Evet, tüm raporlarınız sistemde güvenle saklanır ve istediğiniz zaman erişebilirsiniz. Gelişmiş arama özellikleriyle eski raporlarınızı kolayca bulabilirsiniz.',
    },
  ],
  [
    {
      question: 'Mobil uygulama mevcut mu?',
      answer:
        'Evet, iOS ve Android uyumlu mobil uygulamamız mevcuttur. Sahada ekspertiz yaparken bile raporlarınızı kolayca hazırlayabilirsiniz.',
    },
    {
      question: 'Yeni özellikler eklenecek mi?',
      answer: 'Sürekli gelişim prensibiyle çalışıyoruz. Müşterilerimizden gelen geri bildirimler doğrultusunda yeni özellikler eklemeye devam ediyoruz.',
    },
    {
      question: 'Şifremi unuttum, ne yapmalıyım?',
      answer:
        'Giriş sayfasındaki "Şifremi Unuttum" bağlantısını kullanarak kolayca yeni şifre alabilirsiniz. Güvenlik nedeniyle şifre sıfırlama bağlantısı kayıtlı e-posta adresinize gönderilecektir.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Aradığınız bilgiyi bulamadıysanız, destek ekibimizle iletişime geçebilirsiniz. 
            Size en kısa sürede yardımcı olacağız.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
