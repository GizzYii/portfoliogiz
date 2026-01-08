import React from 'react';
import { GraduationCap } from 'lucide-react';
import { getEducation } from '../data/education';

const Education = ({ t, lang }) => {
	const education = getEducation(lang);

	return (
		<section id="education" className={`py-20 px-6 ${lang === 'tr' ? 'bg-white/5' : 'bg-[#E9ECEF]/30'}`}>
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
	);
};

export default Education;
