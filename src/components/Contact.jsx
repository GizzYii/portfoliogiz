import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = ({ t }) => {
	return (
		<section id="contact" className="py-20 px-6">
			<div className="max-w-xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
				<p className="opacity-70 mb-10">{t.contact.desc}</p>
				<div className="flex flex-col gap-4">
					<a href="mailto:gzmallkn@gmail.com" className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 transition-all text-[#495057] dark:text-[#ADB5BD]">
						<Mail className="text-[#ADB5BD]" /> <span className="font-medium">gzmallkn@gmail.com</span>
					</a>
					<div className="flex gap-4">
						<a href="https://www.linkedin.com/in/ygzy-6414-y/" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 border rounded-xl flex items-center justify-center gap-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 transition-all text-[#495057] dark:text-[#ADB5BD]"><Linkedin size={20} /> LinkedIn</a>
						<a href="https://github.com/GizzYii" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 border rounded-xl flex items-center justify-center gap-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 transition-all text-[#495057] dark:text-[#ADB5BD]"><Github size={20} /> GitHub</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
