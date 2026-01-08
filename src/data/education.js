export const getEducation = (lang = 'tr') => [
	{
		id: 1,
		school: lang === 'tr' ? 'İstanbul Üniversitesi' : 'Istanbul University',
		degree: lang === 'tr' ? 'Bilgisayar Programcılığı' : 'Computer Programming',
		date: '2025 - 2027',
		desc: lang === 'tr' ? 'Yazılım geliştirme temelleri ve modern diller.' : 'Software dev fundamentals.'
	},
	{
		id: 2,
		school: lang === 'tr' ? 'İstanbul Üniversitesi' : 'Istanbul University',
		degree: lang === 'tr' ? 'Çocuk Gelişimi (Lisans)' : "Child Development (Bachelor's)",
		date: '2021 - 2023',
		desc: lang === 'tr' ? 'Gelişim psikolojisi, özel eğitim, pedagoji ve eğitim süreçleri yönetimi.' : 'Psychology, special education, and pedagogy.'
	},
	{
		id: 3,
		school: lang === 'tr' ? 'Atatürk Üniversitesi' : 'Ataturk University',
		degree: lang === 'tr' ? 'Çocuk Gelişimi (Önlisans)' : "Child Development (Associate's)",
		date: '2018 - 2020',
		desc: lang === 'tr' ? 'Erken çocukluk dönemi eğitimi ve gelişim takibi.' : 'Early childhood education.'
	},
	{
		id: 4,
		school: lang === 'tr' ? 'Evliya Çelebi Mesleki ve Teknik Anadolu Lisesi' : 'Evliya Celebi Vocational High School',
		degree: lang === 'tr' ? 'Konaklama ve Seyahat Hizmetleri (Turizm)' : 'Hospitality and Travel Services (Tourism)',
		date: '2013 - 2017',
		desc: lang === 'tr' ? 'Turizm sektörü temelleri ve konaklama hizmetleri eğitimi.' : 'Tourism sector fundamentals and hospitality services.'
	}
];

export default getEducation;
