import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  ChevronRight, 
  Sparkles, 
  Sun, 
  Moon, 
  Globe, 
  ChevronLeft,
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  Hotel,
  Palmtree,
  CloudSun,
  Search,
  Layout,
  Gamepad2,
  CheckSquare,
  Layers,
  Link,
  Star
} from 'lucide-react';

const translations = {
  tr: {
    nav: { home: 'Ana Sayfa', projects: 'Projeler', experience: 'Deneyim', education: 'Eğitim', skills: 'Yetenekler', contact: 'İletişim' },
    hero: {
      badge: 'FRONTEND & REACT & WEB DEVELOPMENT',
      firstName: 'Gizem',
      lastName: 'Yıldız Allıkan',
      title: 'Beginner Frontend Developer | Çocuk Gelişimcisi',
      desc: 'Web ve frontend geliştirme alanında kendini geliştiren bir geliştirici adayıyım. Arayüzlerin nasıl çalıştığı kadar, kullanılan yapının ve mimarinin neden o şekilde kurgulandığını anlamaya odaklanıyorum. Şu an frontend tarafında derinleşirken, ilerleyen süreçte full-stack geliştirme yolunda kendimi konumlandırmayı hedefliyorum.',
      cta: 'Projelerimi Gör'
    },
    projects: { title: 'Seçili Projeler', learning: 'Öğrenim Çıktısı' },
    experience: { title: 'Deneyim', present: 'Halen' },
    education: { title: 'Eğitim' },
    skills: {
      title: 'Yetenek Seti',
      journeyTitle: 'Vizyon & Öğrenme Yolculuğu',
      journeyDesc: 'Teknik temellerimi sağlamlaştırırken, modern yazılım dünyasının gereksinimlerine adapte oluyorum:',
      architecture: 'Yazılım mimarisi ve arka plan çalışma mantığını kavramaya odaklanıyorum.',
      aiStrategy: 'Yapay zekayı öğrenme sürecimi aksatmadan, verimli bir geliştirme asistanı olarak kullanıyorum.',
      webServices: 'Web servisleri ve RESTful API mimarileri üzerinden backend entegrasyonlarını inceliyorum.',
      backendInterest: 'Frontend tarafındaki yetkinliğimi, backend sistemlerin işleyişine dair merakımla birleştiriyorum.'
    },
    contact: { title: 'İletişime Geçelim.', desc: 'Bana buradan ulaşabilirsiniz:' },
    footer: 'Tasarım & Kodlama'
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', experience: 'Experience', education: 'Education', skills: 'Skills', contact: 'Contact' },
    hero: {
      badge: 'FRONTEND & REACT & WEB DEVELOPMENT',
      firstName: 'Gizem',
      lastName: 'Yildiz Allikan',
      title: 'Beginner Frontend Developer | Child Development Specialist',
      desc: 'I am an aspiring developer specializing in web and frontend development. I focus on understanding not just how interfaces work, but why structures are built the way they are.',
      cta: 'View My Work'
    },
    projects: { title: 'Selected Projects', learning: 'Key Learning' },
    experience: { title: 'Experience', present: 'Present' },
    education: { title: 'Education' },
    skills: { title: 'Skill Set', journeyTitle: 'Vision & Learning Journey' },
    contact: { title: "Let's Connect.", desc: 'You can reach me here:' },
    footer: 'Designed & Coded by'
  }
};

const App = () => {
  const scrollRef = useRef(null);
  const expRef = useRef(null);
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'tr');
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const t = translations[lang];

  useEffect(() => {
    document.title = `Gizem Yıldız Allıkan | Portfolyo`;
    document.documentElement.lang = lang;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, lang]);

  const projects = [
    {
      id: 1,
      title: "AI Image Generator",
      description: lang === 'tr' ? "OpenAI API kullanarak metin açıklamalarından görsel oluşturan uygulama." : "Image generation app using OpenAI API.",
      tech: ["React", "Axios", "API Integration"],
      learning: lang === 'tr' ? "Asenkron JavaScript ve API response handling konularında derinleştim." : "Deepened knowledge in Async JS and API handling.",
      github: "https://github.com/GizzYii/AI-Image-Generator",
      icon: <Sparkles size={24} />
    },
    {
      id: 2,
      title: "100 Mini Projects Frontend",
      description: lang === 'tr' ? "Frontend becerilerini geliştirmek için hazırlanmış kapsamlı proje koleksiyonu." : "Comprehensive collection of projects to improve frontend skills.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      learning: lang === 'tr' ? "DOM manipülasyonu ve temel UI bileşenlerini uygulama pratiği kazandım." : "Gained practice in DOM manipulation and UI components.",
      github: "https://github.com/GizzYii/100-mini-Projects-Frontend",
      icon: <Layers size={24} />
    },
    {
      id: 3,
      title: "Rock Paper Scissors Game",
      description: lang === 'tr' ? "Klasik taş-kağıt-makas oyununun interaktif web versiyonu." : "Interactive web version of the classic rock-paper-scissors game.",
      tech: ["JavaScript", "Game Logic", "CSS"],
      learning: lang === 'tr' ? "Oyun mantığı kurma ve durum (state) yönetimi konularında deneyim kazandım." : "Experienced in game logic and state management.",
      github: "https://github.com/GizzYii/RockPaperScissorsGame",
      icon: <Gamepad2 size={24} />
    },
    {
      id: 4,
      title: "Todo List App",
      description: lang === 'tr' ? "Günlük görevleri yönetmek için geliştirilmiş kullanıcı dostu planlayıcı." : "User-friendly planner developed to manage daily tasks.",
      tech: ["HTML", "JavaScript", "Local Storage"],
      learning: lang === 'tr' ? "Veri kalıcılığı için Local Storage kullanımını öğrendim." : "Learned how to use Local Storage for data persistence.",
      github: "https://github.com/GizzYii/todolistapp.github.io",
      icon: <CheckSquare size={24} />
    },
    {
      id: 5,
      title: "Developer Learning Journal",
      description: lang === 'tr' ? "Yazılım öğrenme sürecimi dokümante ettiğim interaktif günlüğüm." : "Documentation of my software learning journey.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      learning: lang === 'tr' ? "Teknik dokümantasyon ve hiyerarşik içerik yapısını pekiştirdim." : "Reinforced technical documentation skills.",
      github: "https://github.com/GizzYii/Developer-Learning-Journal",
      icon: <Layout size={24} />
    }
  ];

  const experiences = [
    {
      id: 1,
      role: lang === 'tr' ? "Topluluk Üyesi & Açık Kaynak Katılımcısı" : "Community Member & Open Source Contributor",
      company: "Bilgisayar Kavramları Topluluğu - Şadi Evren Şeker",
      date: lang === 'tr' ? `Ekim 2025 - ${t.experience.present}` : `Oct 2025 - ${t.experience.present}`,
      desc: lang === 'tr' 
        ? "Şadi Evren Şeker öncülüğünde açık kaynak projelere katkıda bulunuyor, uzmanlarla işbirliği içinde güçlü bir teknik ağ geliştiriyorum." 
        : "Contributing to open-source projects led by Sadi Evren Seker, building strong technical networks.",
      icon: <Users size={20} />,
      skills: ["Açık Kaynak", "Network", "İşbirliği"]
    },
    {
      id: 2,
      role: lang === 'tr' ? "Çocuk Gelişimcisi" : "Child Development Specialist",
      company: lang === 'tr' ? "Belediye" : "Municipality",
      date: "Mart 2023 - Ara 2024",
      desc: lang === 'tr' 
        ? "Çocuk gelişimi ve aile odaklı çalışmalarda multidisipliner işbirliği. Beklenmedik durumlarda hızlı kriz yönetimi ve analitik problem çözme süreçleri." 
        : "Multidisciplinary collaboration in family-oriented studies. Fast crisis management and analytical problem-solving.",
      icon: <Building2 size={20} />,
      skills: ["Problem Çözme", "Kriz Yönetimi", "İletişim"]
    },
    {
      id: 3,
      role: lang === 'tr' ? "Okul Öncesi Öğretmeni" : "Pre-school Teacher",
      company: lang === 'tr' ? "Çocuksu Düşler Anaokulu" : "Cocuksu Dusler Kindergarten",
      date: "Şub 2021 - Haz 2021",
      desc: lang === 'tr' 
        ? "Eğitim süreçlerinin takibi ve yönetiminde proaktif problem çözme ve kriz anlarında sükuneti koruyarak çözüm üretme." 
        : "Proactive problem-solving in education management and maintaining calm to generate solutions.",
      icon: <Building2 size={20} />,
      skills: ["Problem Çözme", "Kriz Yönetimi"]
    },
    {
      id: 4,
      role: lang === 'tr' ? "Resepsiyon Görevlisi" : "Receptionist",
      company: "Navona Otel",
      date: "Kas 2016 - May 2017",
      desc: lang === 'tr' 
        ? "Yüksek yoğunluklu misafir ilişkilerinde anlık problem çözme ve operasyonel aksaklıklarda etkin kriz yönetimi ile müşteri memnuniyeti." 
        : "Instant problem-solving in high-density guest relations and effective crisis management.",
      icon: <Hotel size={20} />,
      skills: ["Kriz Yönetimi", "Problem Çözme", "Müşteri Deneyimi"]
    },
    {
      id: 5,
      role: lang === 'tr' ? "Resepsiyon Görevlisi (Stajyer)" : "Receptionist (Trainee)",
      company: "Crystal Admiral Hotel & Resort",
      date: "Nis 2016 - Eki 2016",
      desc: lang === 'tr' 
        ? "Misafir hizmetleri ve operasyonel süreçlerde deneyim. Ön büro yönetiminde güçlü iletişim ve gözlem yeteneği gelişimi." 
        : "Experience in guest services and operations. Developing strong communication and observation skills in front desk management.",
      icon: <Hotel size={20} />,
      skills: ["Müşteri Desteği", "Ekip Çalışması", "Satış", "Kriz Yönetimi"]
    },
    {
      id: 6,
      role: lang === 'tr' ? "Mini Kulüp Eğlence Sorumlusu (Stajyer)" : "Mini Club Entertainer (Trainee)",
      company: "Voyage Belek Golf & SPA",
      date: "Nis 2015 - Eki 2015",
      desc: lang === 'tr' 
        ? "Çocuk misafirlerin etkinlik yönetimi ve eğlence süreçlerinde aktif rol alma. Uluslararası ekiplerle çalışma tecrübesi." 
        : "Active role in child guest activities and entertainment processes. Experience working with international teams.",
      icon: <Palmtree size={20} />,
      skills: ["Müşteri Desteği", "Ekip Çalışması", "Kriz Yönetimi", "Uyum"]
    }
  ];

  const education = [
    {
      id: 1,
      school: lang === 'tr' ? "İstanbul Üniversitesi" : "Istanbul University",
      degree: lang === 'tr' ? "Bilgisayar Programcılığı" : "Computer Programming",
      date: "2025 - 2027",
      desc: lang === 'tr' ? "Yazılım geliştirme temelleri ve modern diller." : "Software dev fundamentals."
    },
    {
      id: 2,
      school: lang === 'tr' ? "İstanbul Üniversitesi" : "Istanbul University",
      degree: lang === 'tr' ? "Çocuk Gelişimi (Lisans)" : "Child Development (Bachelor's)",
      date: "2021 - 2023",
      desc: lang === 'tr' ? "Gelişim psikolojisi, özel eğitim, pedagoji ve eğitim süreçleri yönetimi." : "Psychology, special education, and pedagogy."
    },
    {
      id: 3,
      school: lang === 'tr' ? "Atatürk Üniversitesi" : "Ataturk University",
      degree: lang === 'tr' ? "Çocuk Gelişimi (Önlisans)" : "Child Development (Associate's)",
      date: "2018 - 2020",
      desc: lang === 'tr' ? "Erken çocukluk dönemi eğitimi ve gelişim takibi." : "Early childhood education."
    },
    {
      id: 4,
      school: lang === 'tr' ? "Evliya Çelebi Mesleki ve Teknik Anadolu Lisesi" : "Evliya Celebi Vocational High School",
      degree: lang === 'tr' ? "Konaklama ve Seyahat Hizmetleri (Turizm)" : "Hospitality and Travel Services (Tourism)",
      date: "2013 - 2017",
      desc: lang === 'tr' ? "Turizm sektörü temelleri ve konaklama hizmetleri eğitimi." : "Tourism sector fundamentals and hospitality services."
    }
  ];

  const skillData = [
    { name: 'JavaScript (ES6+)', level: 75 },
    { name: 'React.js', level: 70 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'Responsive Design', level: 85 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'Web Servisleri', level: 20 }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#121212] text-[#E0E0E0]' : 'bg-[#F8F9FA] text-[#212529]'} font-sans overflow-x-hidden`}>
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full border-b backdrop-blur-md z-50 transition-colors ${isDark ? 'bg-[#121212]/80 border-white/10' : 'bg-white/80 border-[#E9ECEF]'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className={`text-lg font-bold tracking-tight flex items-center gap-1 ${isDark ? 'text-white' : 'text-[#495057]'}`}>
            GIZ <Star size={16} fill="currentColor" className="text-[#ADB5BD]" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest">
              {Object.keys(t.nav).map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="hover:text-[#ADB5BD] transition-colors"
                >
                  {t.nav[key]}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 border-l pl-4 border-[#ADB5BD]/30">
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => { setLang(lang === 'tr' ? 'en' : 'tr'); localStorage.setItem('lang', lang === 'tr' ? 'en' : 'tr'); }} className="p-2 rounded-full flex items-center gap-1 hover:bg-black/5 dark:hover:bg-white/10">
                <Globe size={18} />
                <span className="text-[10px] font-bold uppercase">{lang}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section id="home" className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 text-center md:text-left">
            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${isDark ? 'bg-white/10 text-[#ADB5BD]' : 'bg-[#E9ECEF] text-[#495057]'}`}>{t.hero.badge}</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{t.hero.firstName} <span className="text-[#ADB5BD]">{t.hero.lastName}</span></h1>
            <p className="text-sm md:text-base font-semibold mb-6 uppercase tracking-wider text-[#ADB5BD]">{t.hero.title}</p>
            <p className="text-lg mb-10 leading-relaxed opacity-80">{t.hero.desc}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button onClick={() => scrollTo('projects')} className="px-8 py-3 rounded-lg font-medium bg-[#212529] text-white dark:bg-white dark:text-black flex items-center gap-2">
                {t.hero.cta} <ChevronRight size={18} />
              </button>
              <div className="flex gap-2">
                <a href="https://github.com/GizzYii" target="_blank" className="p-3 border rounded-lg hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/ygzy-6414-y/" target="_blank" className="p-3 border rounded-lg hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white dark:border-white/10 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className={`py-20 px-6 ${isDark ? 'bg-white/5' : 'bg-[#E9ECEF]/30'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-3xl font-bold">{t.projects.title}</h2>
              <div className="h-[1px] flex-1 bg-[#ADB5BD]/30"></div>
            </div>
            <div className="flex gap-2 ml-4">
              <button onClick={() => scrollContainer(scrollRef, 'left')} className="p-2 rounded-full border hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"><ChevronLeft size={20} /></button>
              <button onClick={() => scrollContainer(scrollRef, 'right')} className="p-2 rounded-full border hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"><ChevronRight size={20} /></button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory">
            {projects.map(p => (
              <div key={p.id} className="snap-start flex-shrink-0 w-[300px] md:w-[380px] p-8 rounded-2xl border bg-white dark:bg-[#1A1A1A] dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between mb-4 text-[#ADB5BD]">
                  {p.icon || <Code2 size={24} />}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm opacity-70 mb-4 h-12 line-clamp-2">{p.description}</p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#ADB5BD] mb-1">{t.projects.learning}</div>
                <p className="text-xs italic opacity-60 mb-4">"{p.learning}"</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 border rounded border-[#ADB5BD]/20">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-3xl font-bold">{t.experience.title}</h2>
              <div className="h-[1px] flex-1 bg-[#ADB5BD]/30"></div>
            </div>
            <div className="flex gap-2 ml-4">
              <button onClick={() => scrollContainer(expRef, 'left')} className="p-2 rounded-full border hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"><ChevronLeft size={20} /></button>
              <button onClick={() => scrollContainer(expRef, 'right')} className="p-2 rounded-full border hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div ref={expRef} className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory">
            {experiences.map(exp => (
              <div key={exp.id} className="snap-start flex-shrink-0 w-[300px] md:w-[420px] p-8 rounded-2xl border bg-white dark:bg-[#1A1A1A] dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#ADB5BD]/10 text-[#ADB5BD]">
                    {exp.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase text-[#ADB5BD] bg-[#ADB5BD]/5 px-2 py-1 rounded tracking-tighter">{exp.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                <h4 className="text-sm font-semibold mb-4 text-[#ADB5BD]">{exp.company}</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-6 h-20 overflow-hidden line-clamp-3">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(s => (
                    <span key={s} className="text-[9px] font-bold uppercase tracking-tighter px-2 py-1 bg-black/5 dark:bg-white/5 rounded-md border dark:border-white/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION --- */}
      <section id="education" className={`py-20 px-6 ${isDark ? 'bg-white/5' : 'bg-[#E9ECEF]/30'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold">{t.education.title}</h2>
            <div className="h-[1px] flex-1 bg-[#ADB5BD]/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map(edu => (
              <div key={edu.id} className="p-6 rounded-xl border bg-white dark:bg-[#1A1A1A] dark:border-white/5 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 text-[#ADB5BD] mb-2">
                  <GraduationCap size={16} />
                  <span className="text-[10px] font-bold uppercase">{edu.date}</span>
                </div>
                <h3 className="text-base font-bold">{edu.school}</h3>
                <h4 className="text-xs font-semibold text-[#ADB5BD] mb-2">{edu.degree}</h4>
                <p className="text-xs opacity-70">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS & VISION --- */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t.skills.title}</h2>
            <div className="space-y-6">
              {skillData.map(skill => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-[#ADB5BD]">
                    <span>{skill.name}</span>
                    <span>%{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#ADB5BD] to-[#495057] dark:from-[#ADB5BD] dark:to-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-[#212529] text-white dark:bg-white/5 border dark:border-white/10 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Sparkles className="text-[#ADB5BD]" /> {t.skills.journeyTitle}</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-4">{t.skills.journeyDesc}</p>
            <div className="space-y-3">
              {[t.skills.architecture, t.skills.aiStrategy, t.skills.webServices].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-xs opacity-70"><ChevronRight size={14} className="flex-shrink-0 text-[#ADB5BD]" /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="opacity-70 mb-10">{t.contact.desc}</p>
          <div className="flex flex-col gap-4">
            <a href="mailto:gzmallkn@gmail.com" className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 transition-all">
              <Mail className="text-[#ADB5BD]" /> <span className="font-medium">gzmallkn@gmail.com</span>
            </a>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/ygzy-6414-y/" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 border rounded-xl flex items-center justify-center gap-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 transition-all"><Linkedin size={20} /> LinkedIn</a>
              <a href="https://github.com/GizzYii" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 border rounded-xl flex items-center justify-center gap-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 transition-all"><Github size={20} /> GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-[#ADB5BD]/20 text-center text-[#ADB5BD] text-[10px] uppercase tracking-widest">
        © 2026 Gizem Yıldız Allıkan • {t.footer}
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;