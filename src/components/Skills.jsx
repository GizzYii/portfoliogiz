import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { getSkills } from '../data/skills';

const Skills = ({ t }) => {
	const skillData = getSkills();

	return (
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
				<div className="p-8 rounded-2xl border card flex flex-col justify-center">
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
	);
};

export default Skills;
