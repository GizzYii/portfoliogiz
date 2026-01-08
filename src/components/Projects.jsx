import React from 'react';
import { Github, Code2, Sparkles, Layers, Gamepad2, CheckSquare, Layout } from 'lucide-react';
import { getProjects } from '../data/projects';

const Projects = ({ t, lang, scrollRef, scrollContainer }) => {
	const projects = getProjects(lang);

	return (
		<section id="projects" className={`py-20 px-6 ${t ? (lang === 'tr' ? 'bg-white/5' : 'bg-[#E9ECEF]/30') : ''}`}>
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center justify-between mb-10">
					<div className="flex items-center gap-4 flex-1">
						<h2 className="text-3xl font-bold">{t.projects.title}</h2>
						<div className="h-[1px] flex-1 bg-[#ADB5BD]/30"></div>
					</div>
					<div className="flex gap-2 ml-4">
						<button
							onClick={() => scrollContainer(scrollRef, 'left')}
							className="p-2 rounded-full border border-[#ADB5BD]/20 text-[#495057] bg-transparent hover:bg-[#ADB5BD]/10 dark:text-[#ADB5BD] dark:border-white/10 dark:hover:bg-white/5"
						>◀</button>
						<button
							onClick={() => scrollContainer(scrollRef, 'right')}
							className="p-2 rounded-full border border-[#ADB5BD]/20 text-[#495057] bg-transparent hover:bg-[#ADB5BD]/10 dark:text-[#ADB5BD] dark:border-white/10 dark:hover:bg-white/5"
						>▶</button>
					</div>
				</div>

				<div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory">
					{projects.map(p => {
						const Icons = { Sparkles, Layers, Gamepad2, CheckSquare, Layout };
						const IconComp = Icons[p.icon];
						return (
							<div key={p.id} className="snap-start flex-shrink-0 w-[300px] md:w-[380px] p-8 rounded-2xl border card hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
								<div className="flex justify-between mb-4 text-[#ADB5BD]">
									{IconComp ? <IconComp size={24} /> : <Code2 size={24} />}
									<a href={p.github} target="_blank" rel="noopener noreferrer" className="p-2 border rounded-lg bg-transparent border-[#ADB5BD]/10 text-[#495057] hover:bg-[#ADB5BD]/10 dark:text-[#ADB5BD] dark:border-white/10 dark:hover:bg-white/5">
									  <Github size={20} />
									</a>
								</div>
								<h3 className="text-xl font-bold mb-2">{p.title}</h3>
								<p className="text-sm opacity-70 mb-4 h-12 line-clamp-2">{p.description}</p>
								<div className="text-[10px] font-bold uppercase tracking-widest text-[#ADB5BD] mb-1">{t.projects.learning}</div>
								<p className="text-xs italic opacity-60 mb-4">"{p.learning}"</p>
								<div className="flex flex-wrap gap-2">
									{p.tech.map(tt => <span key={tt} className="text-[10px] font-bold px-2 py-1 border rounded border-[#ADB5BD]/20">{tt}</span>)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
