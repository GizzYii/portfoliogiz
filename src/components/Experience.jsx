import React from 'react';
import { Users, Building2, Hotel, Palmtree } from 'lucide-react';
import { getExperiences } from '../data/experience';

const Experience = ({ t, lang, expRef, scrollContainer }) => {
	const experiences = getExperiences(lang, t);

	return (
		<section id="experience" className="py-20 px-6">
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center justify-between mb-10">
					<div className="flex items-center gap-4 flex-1">
						<h2 className="text-3xl font-bold">{t.experience.title}</h2>
						<div className="h-[1px] flex-1 bg-[#ADB5BD]/30"></div>
					</div>
					<div className="flex gap-2 ml-4">
						<button
							onClick={() => scrollContainer(expRef, 'left')}
							className="p-2 rounded-full border border-[#ADB5BD]/20 text-[#495057] bg-transparent hover:bg-[#ADB5BD]/10 dark:text-[#ADB5BD] dark:border-white/10 dark:hover:bg-white/5"
						>◀</button>
						<button
							onClick={() => scrollContainer(expRef, 'right')}
							className="p-2 rounded-full border border-[#ADB5BD]/20 text-[#495057] bg-transparent hover:bg-[#ADB5BD]/10 dark:text-[#ADB5BD] dark:border-white/10 dark:hover:bg-white/5"
						>▶</button>
					</div>
				</div>

				<div ref={expRef} className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory">
					{experiences.map(exp => (
						<div key={exp.id} className="snap-start flex-shrink-0 w-[300px] md:w-[420px] p-8 rounded-2xl border bg-white dark:bg-[#1A1A1A] dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
							<div className="flex items-start justify-between mb-6">
								<div className="p-3 rounded-xl bg-[#ADB5BD]/10 text-[#ADB5BD]">
										{(() => {
											const Icons = { Users, Building2, Hotel, Palmtree };
											const IconComp = Icons[exp.icon];
											return IconComp ? <IconComp size={20} /> : null;
										})()}
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
	);
};

export default Experience;
