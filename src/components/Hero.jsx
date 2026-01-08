import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronRight, Star } from 'lucide-react';
import profile from '../assets/pp.jpeg';

const Hero = ({ t, isDark, scrollTo }) => {
	return (
		<section id="home" className="pt-40 pb-20 px-6">
			<div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 text-center md:text-left">
					<span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${isDark ? 'bg-white/10 text-[#ADB5BD]' : 'bg-[#E9ECEF] text-[#495057]'}`}>{t.hero.badge}</span>
					<h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{t.hero.firstName} <span className="text-[#ADB5BD]">{t.hero.lastName}</span></h1>
					<p className="text-sm md:text-base font-semibold mb-6 uppercase tracking-wider text-[#ADB5BD]">{t.hero.title}</p>
					<p className="text-lg mb-10 leading-relaxed opacity-80">{t.hero.desc}</p>
					<div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
						<button onClick={() => scrollTo('projects')} className="px-8 py-3 rounded-lg font-medium bg-[#212529] text-white dark:bg-white dark:text-black flex items-center gap-2">
							{t.hero.cta} <ChevronRight size={18} />
						</button>
						{/* Single CV accordion (toggle to reveal TR / EN links) */}
						{(() => {
							const [cvOpen, setCvOpen] = useState(false);
							return (
								<div className="relative">
									<button
										aria-expanded={cvOpen}
										onClick={() => setCvOpen(!cvOpen)}
										className="px-4 py-2 text-sm rounded-md font-medium bg-black/5 text-[#495057] hover:bg-black/10 dark:bg-white/5 dark:text-[#ADB5BD] dark:hover:bg-white/10 border border-[#ADB5BD]/10 dark:border-white/10"
									>
										CV
									</button>
									{cvOpen && (
										<div className="mt-2 flex flex-col gap-2 absolute left-0 w-max z-10">
											<a href="/cv-tr.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm rounded-md font-medium bg-black/5 text-[#495057] hover:bg-black/10 dark:bg-white/5 dark:text-[#ADB5BD] dark:hover:bg-white/10 border border-[#ADB5BD]/10 dark:border-white/10">
												{t.hero.cv_tr}
											</a>
											<a href="/cv-en.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm rounded-md font-medium bg-black/5 text-[#495057] hover:bg-black/10 dark:bg-white/5 dark:text-[#ADB5BD] dark:hover:bg-white/10 border border-[#ADB5BD]/10 dark:border-white/10">
												{t.hero.cv_en}
											</a>
										</div>
									)}
								</div>
							);
						})()}
						<div className="flex gap-2">
							<a href="https://github.com/GizzYii" target="_blank" rel="noopener noreferrer" className="p-3 border rounded-lg hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 text-[#495057] dark:text-[#ADB5BD]">
								<Github size={20} />
							</a>
							<a href="https://www.linkedin.com/in/ygzy-6414-y/" target="_blank" rel="noopener noreferrer" className="p-3 border rounded-lg hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 text-[#495057] dark:text-[#ADB5BD]">
								<Linkedin size={20} />
							</a>
						</div>
					</div>
				</motion.div>
				<div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white dark:border-white/10 shadow-2xl overflow-hidden">
					<img src={profile} alt="Profile" className="w-full h-full object-cover object-center transform scale-110" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
