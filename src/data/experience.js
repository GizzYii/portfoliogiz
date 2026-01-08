import React from 'react';
import { Users, Building2, Hotel, Palmtree } from 'lucide-react';

export const getExperiences = (lang = 'tr', t = { experience: { present: 'Halen' } }) => [
	{
		id: 1,
		role: lang === 'tr' ? 'Topluluk Üyesi & Açık Kaynak Katılımcısı' : 'Community Member & Open Source Contributor',
		company: 'Bilgisayar Kavramları Topluluğu - Şadi Evren Şeker',
		date: lang === 'tr' ? `Ekim 2025 - ${t.experience.present}` : `Oct 2025 - ${t.experience.present}`,
		desc: lang === 'tr' ? 'Şadi Evren Şeker öncülüğünde açık kaynak projelere katkıda bulunuyor, uzmanlarla işbirliği içinde güçlü bir teknik ağ geliştiriyorum.' : 'Contributing to open-source projects led by Sadi Evren Seker, building strong technical networks.',
		icon: 'Users',
		skills: ['Açık Kaynak', 'Network', 'İşbirliği']
	},
	{
		id: 2,
		role: lang === 'tr' ? 'Çocuk Gelişimcisi' : 'Child Development Specialist',
		company: lang === 'tr' ? 'Belediye' : 'Municipality',
		date: 'Mart 2023 - Ara 2024',
		desc: lang === 'tr' ? 'Çocuk gelişimi ve aile odaklı çalışmalarda multidisipliner işbirliği. Beklenmedik durumlarda hızlı kriz yönetimi ve analitik problem çözme süreçleri.' : 'Multidisciplinary collaboration in family-oriented studies. Fast crisis management and analytical problem-solving.',
		icon: 'Building2',
		skills: ['Problem Çözme', 'Kriz Yönetimi', 'İletişim']
	},
	{
		id: 3,
		role: lang === 'tr' ? 'Okul Öncesi Öğretmeni' : 'Pre-school Teacher',
		company: lang === 'tr' ? 'Çocuksu Düşler Anaokulu' : 'Cocuksu Dusler Kindergarten',
		date: 'Şub 2021 - Haz 2021',
		desc: lang === 'tr' ? 'Eğitim süreçlerinin takibi ve yönetiminde proaktif problem çözme ve kriz anlarında sükuneti koruyarak çözüm üretme.' : 'Proactive problem-solving in education management and maintaining calm to generate solutions.',
		icon: 'Building2',
		skills: ['Problem Çözme', 'Kriz Yönetimi']
	},
	{
		id: 4,
		role: lang === 'tr' ? 'Resepsiyon Görevlisi' : 'Receptionist',
		company: 'Navona Otel',
		date: 'Kas 2016 - May 2017',
		desc: lang === 'tr' ? 'Yüksek yoğunluklu misafir ilişkilerinde anlık problem çözme ve operasyonel aksaklıklarda etkin kriz yönetimi ile müşteri memnuniyeti.' : 'Instant problem-solving in high-density guest relations and effective crisis management.',
		icon: 'Hotel',
		skills: ['Kriz Yönetimi', 'Problem Çözme', 'Müşteri Deneyimi']
	},
	{
		id: 5,
		role: lang === 'tr' ? 'Resepsiyon Görevlisi (Stajyer)' : 'Receptionist (Trainee)',
		company: 'Crystal Admiral Hotel & Resort',
		date: 'Nis 2016 - Eki 2016',
		desc: lang === 'tr' ? 'Misafir hizmetleri ve operasyonel süreçlerde deneyim. Ön büro yönetiminde güçlü iletişim ve gözlem yeteneği gelişimi.' : 'Experience in guest services and operations. Developing strong communication and observation skills in front desk management.',
		icon: 'Hotel',
		skills: ['Müşteri Desteği', 'Ekip Çalışması', 'Satış', 'Kriz Yönetimi']
	},
	{
		id: 6,
		role: lang === 'tr' ? 'Mini Kulüp Eğlence Sorumlusu (Stajyer)' : 'Mini Club Entertainer (Trainee)',
		company: 'Voyage Belek Golf & SPA',
		date: 'Nis 2015 - Eki 2015',
		desc: lang === 'tr' ? 'Çocuk misafirlerin etkinlik yönetimi ve eğlence süreçlerinde aktif rol alma. Uluslararası ekiplerle çalışma tecrübesi.' : 'Active role in child guest activities and entertainment processes. Experience working with international teams.',
		icon: 'Palmtree',
		skills: ['Müşteri Desteği', 'Ekip Çalışması', 'Kriz Yönetimi', 'Uyum']
	}
];

export default getExperiences;
