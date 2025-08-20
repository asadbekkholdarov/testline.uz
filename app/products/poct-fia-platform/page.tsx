'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Zap, Clock, Target } from 'lucide-react';

export default function POCTFIAPlatform() {
  const { t, language } = useLanguage();

  const platforms = [
    {
      id: 'fia-reader-100',
      name: 'FIA Reader 100',
      description: {
        uz: "Kompakt va oson foydalaniladigan FIA o'quvchi",
        ru: 'Компактный и простой в использовании FIA ридер',
        en: 'Compact and easy-to-use FIA reader',
      },
      image:
        'https://images.pexels.com/photos/6823554/pexels-photo-6823554.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        {
          uz: 'Avtomatik kalibrlash',
          ru: 'Автоматическая калибровка',
          en: 'Automatic calibration',
        },
        {
          uz: 'Bluetooth ulanish',
          ru: 'Bluetooth подключение',
          en: 'Bluetooth connectivity',
        },
        { uz: '2 yil kafolat', ru: '2 года гарантии', en: '2-year warranty' },
      ],
      specifications: {
        readTime: '3-8 min',
        storage: '10,000 results',
        connectivity: 'Bluetooth, USB',
      },
    },
    {
      id: 'fia-reader-200',
      name: 'FIA Reader 200',
      description: {
        uz: 'Professional laboratoriyalar uchun yuqori unumli FIA tizimi',
        ru: 'Высокопроизводительная FIA система для профессиональных лабораторий',
        en: 'High-throughput FIA system for professional laboratories',
      },
      image:
        'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { uz: 'Yuqori aniqlik', ru: 'Высокая точность', en: 'High precision' },
        {
          uz: 'LIS integratsiyasi',
          ru: 'LIS интеграция',
          en: 'LIS integration',
        },
        {
          uz: 'Kengaytirilgan xotira',
          ru: 'Расширенная память',
          en: 'Extended memory',
        },
      ],
      specifications: {
        readTime: '1-5 min',
        storage: '50,000 results',
        connectivity: 'Ethernet, WiFi, USB',
      },
    },
  ];

  // const testCards = [
  //   {
  //     category: {
  //       uz: 'Kardiak markerlar',
  //       ru: 'Кардиальные маркеры',
  //       en: 'Cardiac Markers'
  //     },
  //     tests: ['cTnI', 'CK-MB', 'Myo', 'NT-proBNP'],
  //     image: 'https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800'
  //   },
  //   {
  //     category: {
  //       uz: 'Yallig\'lanish markerlari',
  //       ru: 'Маркеры воспаления',
  //       en: 'Inflammation Markers'
  //     },
  //     tests: ['CRP', 'PCT', 'SAA'],
  //     image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
  //   },
  //   {
  //     category: {
  //       uz: 'Gormonlar',
  //       ru: 'Гормоны',
  //       en: 'Hormones'
  //     },
  //     tests: ['TSH', 'T3', 'T4', 'β-HCG'],
  //     image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800'
  //   }
  // ];

  // Multilingual description for POCT FIA Device
  const fiaDescription = {
    uz: `POCT FIA qurilmasi – turli biomarkerlarni tez va aniq aniqlash uchun mo‘ljallangan ixcham va qulay diagnostika asbobidir. Fluoressent immunoassay (FIA) texnologiyasi asosida qurilma klinik testlarda yuqori sezgirlik va aniqlikni ta’minlaydi.

Asosiy xususiyatlari:
- Tez testlash, natijalar bir necha daqiqada tayyor bo‘ladi.
- Ixcham va portativ dizayn, shifoxona, klinika va sharoitida foydalanish uchun qulay.
- Yuqori test menyusi: infeksion kasalliklar, gormonlar, kardiak markerlar, yallig‘lanish va boshqa parametrlar.
- Foydalanish uchun oson interfeys, minimal o‘qitish talab qilinadi.
- Ishonchli natijalar: o‘rnatilgan sifat nazorati va ma’lumotlarni boshqarish imkoniyati.

Ushbu qurilma joyida diagnostika uchun ideal bo‘lib, tibbiyot xodimlariga bemor parvarishi uchun tez va to‘g‘ri qarorlar qabul qilish imkonini beradi.`,
    ru: `POCT FIA устройство — компактный и удобный диагностический прибор для быстрого и точного определения различных биомаркеров. Используя технологию флуоресцентного иммуноанализа (FIA), устройство обеспечивает высокую чувствительность и специфичность в клинических исследованиях.

Ключевые особенности:
- Быстрое тестирование, результаты доступны за считанные минуты.
- Компактный и портативный дизайн, подходит для больниц, клиник и работы в полевых условиях.
- Широкое меню тестов: инфекционные заболевания, гормоны, сердечные маркеры, воспаление и другие параметры.
- Простой интерфейс, минимальное обучение.
- Надежная работа: встроенный контроль качества и управление данными.

Это устройство идеально подходит для диагностики на месте, позволяя медицинским работникам принимать своевременные и обоснованные решения по уходу за пациентом.`,
    en: `The Point-of-Care Testing (POCT) FIA Device is a compact and user-friendly diagnostic instrument designed for rapid and accurate detection of various biomarkers. Utilizing Fluorescence Immunoassay (FIA) technology, the device ensures high sensitivity and specificity in clinical testing.

Key features include:
- Rapid testing with results available in minutes.
- Compact and portable design, suitable for hospitals, clinics, and field use.
- Wide test menu for infectious diseases, hormones, cardiac markers, inflammation, and other parameters.
- Easy-to-use interface with minimal training required.
- Reliable performance with built-in quality control and data management options.

This device is ideal for point-of-care diagnostics, enabling healthcare professionals to make timely and informed decisions for patient care.`,
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          asChild
          variant="outline"
          className="mb-8 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <Link href="/products">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('back')}
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            POCT FIA Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz'
              ? 'Fluoressent immunoassay texnologiyasi asosidagi zamonaviy POCT platformasi'
              : language === 'ru'
              ? 'Современная POCT платформа на основе технологии флуоресцентного иммуноанализа'
              : 'Advanced POCT platform based on Fluorescent Immunoassay technology'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz'
                  ? 'Yuqori sezgirlik'
                  : language === 'ru'
                  ? 'Высокая чувствительность'
                  : 'High Sensitivity'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz'
                  ? 'Fluoressent texnologiya bilan yuqori aniqlik'
                  : language === 'ru'
                  ? 'Высокая точность с флуоресцентной технологией'
                  : 'High accuracy with fluorescent technology'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz'
                  ? 'Tez natija'
                  : language === 'ru'
                  ? 'Быстрый результат'
                  : 'Rapid Results'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz'
                  ? '3-8 daqiqada aniq natija'
                  : language === 'ru'
                  ? 'Точный результат за 3-8 минут'
                  : 'Accurate results in 3-8 minutes'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz'
                  ? 'Keng imkoniyatlar'
                  : language === 'ru'
                  ? 'Широкие возможности'
                  : 'Versatile Testing'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz'
                  ? 'Turli xil testlar uchun universal platforma'
                  : language === 'ru'
                  ? 'Универсальная платформа для различных тестов'
                  : 'Universal platform for various tests'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* POCT FIA Device Image & Description */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/poct_fia/poct_fia.jpg"
              alt="POCT FIA Device"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'uz'
                ? 'POCT FIA Qurilmasi'
                : language === 'ru'
                ? 'POCT FIA Устройство'
                : 'POCT FIA Device'}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {fiaDescription[language]}
            </p>
          </div>
        </div>

        {/* Key Features */}

        {/* FIA Readers */}
      </div>
    </div>
  );
}
