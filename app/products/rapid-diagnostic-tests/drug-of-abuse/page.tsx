'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
export default function DrugAbuse() {
  const { t, language } = useLanguage(); // Oncology tests data with translations
  const drugTests = [
    {
      code: 'DAMP-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'AMP Tezkor Test Kasseta',
        ru: 'AMP Экспресс-тест Кассета',
        en: 'AMP Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DMOP-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'MOP Tezkor Test Kasseta',
        ru: 'MOP Экспресс-тест Кассета',
        en: 'MOP Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DMET-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'MET Tezkor Test Kasseta',
        ru: 'MET Экспресс-тест Кассета',
        en: 'MET Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DKET-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'KET Tezkor Test Kasseta',
        ru: 'KET Экспресс-тест Кассета',
        en: 'KET Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DCOC-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'COC Tezkor Test Kasseta',
        ru: 'COC Экспресс-тест Кассета',
        en: 'COC Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DMAM-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: '6-MAM Tezkor Test Kasseta',
        ru: '6-MAM Экспресс-тест Кассета',
        en: '6-MAM Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DMDM-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'MDMA Tezkor Test Kasseta',
        ru: 'MDMA Экспресс-тест Кассета',
        en: 'MDMA Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DTHC-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'THC Tezkor Test Kasseta',
        ru: 'THC Экспресс-тест Кассета',
        en: 'THC Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DMCAT-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'MCAT Tezkor Test Kasseta',
        ru: 'MCAT Экспресс-тест Кассета',
        en: 'MCAT Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DBNZ-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'BZO Tezkor Test Kasseta',
        ru: 'BZO Экспресс-тест Кассета',
        en: 'BZO Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DSMA-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'SMA Tezkor Test Kasseta',
        ru: 'SMA Экспресс-тест Кассета',
        en: 'SMA Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DSMP-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'SMP Tezkor Test Kasseta',
        ru: 'SMP Экспресс-тест Кассета',
        en: 'SMP Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DUR144-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'UR-144 Tezkor Test Kasseta',
        ru: 'UR-144 Экспресс-тест Кассета',
        en: 'UR-144 Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DFKET-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'FKET Tezkor Test Kasseta',
        ru: 'FKET Экспресс-тест Кассета',
        en: 'FKET Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DCAF-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'CAF Tezkor Test Kasseta',
        ru: 'CAF Экспресс-тест Кассета',
        en: 'CAF Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DFYL-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'FYL Tezkor Test Kasseta',
        ru: 'FYL Экспресс-тест Кассета',
        en: 'FYL Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DOXY-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'OXY Tezkor Test Kasseta',
        ru: 'OXY Экспресс-тест Кассета',
        en: 'OXY Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DTML-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'TML Tezkor Test Kasseta',
        ru: 'TML Экспресс-тест Кассета',
        en: 'TML Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DBUP-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'BUP Tezkor Test Kasseta',
        ru: 'BUP Экспресс-тест Кассета',
        en: 'BUP Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DTCA-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'TCA Tezkor Test Kasseta',
        ru: 'TCA Экспресс-тест Кассета',
        en: 'TCA Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DPCP-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'PCP Tezkor Test Kasseta',
        ru: 'PCP Экспресс-тест Кассета',
        en: 'PCP Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DMTD-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'MTD Tezkor Test Kasseta',
        ru: 'MTD Экспресс-тест Кассета',
        en: 'MTD Rapid Test Cassette',
      },
      packSize: '25 T',
    },
    {
      code: 'DBAR-C91',
      specimen: { uz: 'Soch', ru: 'Волосы', en: 'Hair' },
      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },
      name: {
        uz: 'BAR Tezkor Test Kasseta',
        ru: 'BAR Экспресс-тест Кассета',
        en: 'BAR Rapid Test Cassette',
      },
      packSize: '25 T',
    },
  ];

  const getTableHeaders = () => {
    switch (language) {
      case 'uz':
        return {
          specimen: 'Namuna',
          format: 'Format',
          name: 'Mahsulot nomi',
          packSize: 'Qadoq hajmi',
        };

      case 'ru':
        return {
          specimen: 'Образец',
          format: 'Формат',
          name: 'Название продукта',
          packSize: 'Размер упаковки',
        };

      default:
        return {
          specimen: 'Specimen',
          format: 'Format',
          name: 'Product Name',
          packSize: 'Pack Size',
        };
    }
  };

  const headers = getTableHeaders();
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-blue-600">
            {t('products')}
          </Link>
          <span>/</span>
          <Link
            href="/products/rapid-diagnostic-tests"
            className="hover:text-blue-600"
          >
            {language === 'uz'
              ? 'Tezkor diagnostika'
              : language === 'ru'
              ? 'Экспресс-диагностика'
              : 'Rapid Diagnostic'}
          </Link>
          <span>/</span>
          <span className="text-gray-900">
            {language === 'uz'
              ? 'Giyohvandlik testlari'
              : language === 'ru'
              ? 'Наркотические тесты'
              : 'Drug of Abuse'}
          </span>
        </div>
        {/* Back Button */}
        <Button
          asChild
          variant="outline"
          className="mb-8 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <Link href="/products/rapid-diagnostic-tests">
            <ArrowLeft className="mr-2 w-4 h-4" /> {t('back')}
          </Link>
        </Button>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'uz'
              ? 'Giyohvandlik testlari'
              : language === 'ru'
              ? 'Наркотические тесты'
              : 'Drug of Abuse Tests'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz'
              ? 'Giyohvand moddalarni aniqlash uchun professional tezkor testlar'
              : language === 'ru'
              ? 'Профессиональные экспресс-тесты для выявления наркотических веществ'
              : 'Professional rapid tests for detection of drugs of abuse'}
          </p>
        </div>
        {/* Oncology Tests Table */}
        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="text-2xl text-center text-gray-800">
              {language === 'uz'
                ? 'Giyohvandlik testlari katalogi'
                : language === 'ru'
                ? 'Каталог наркотических тестов'
                : 'Drug of Abuse Tests Catalog'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      {headers.specimen}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      {headers.format}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      {headers.name}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      {headers.packSize}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {drugTests.map((test, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-blue-50 transition-colors duration-200 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {test.specimen[language]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {test.format[language]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {test.name[language]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold text-gray-900">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {test.packSize}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden space-y-4 p-4">
              {drugTests.map((test, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:shadow-md transition-shadow duration-200"
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                          {test.name[language]}
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
                          {test.packSize}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-gray-500 font-medium">
                            {headers.specimen}:
                          </span>
                          <p className="text-gray-900 mt-1">
                            {test.specimen[language]}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">
                            {headers.format}:
                          </span>
                          <p className="mt-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {test.format[language]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-gray-100"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
