import React, { useState } from 'react';
import { Sun, Moon, Globe, Star, Menu, X } from 'lucide-react';

const Navbar = ({ t, lang, setLang, isDark, setIsDark, scrollTo }) => {
	const [open, setOpen] = useState(false);

	const handleNavClick = (key) => {
		setOpen(false);
		scrollTo(key);
	};

	return (
		<nav className={`fixed top-0 w-full border-b backdrop-blur-md z-50 transition-colors ${isDark ? 'bg-[#121212]/80 border-white/10' : 'bg-white/80 border-[#E9ECEF]'}`}>
			<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
				<button onClick={() => { setOpen(false); scrollTo('home'); }} className={`text-lg font-bold tracking-tight flex items-center gap-1 ${isDark ? 'text-white' : 'text-[#495057]'}`}>
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

					{/* Mobile hamburger */}
					<button
						className="md:hidden ml-2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
						onClick={() => setOpen(!open)}
						aria-label={open ? 'Close menu' : 'Open menu'}
					>
						{open ? <X size={18} /> : <Menu size={18} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`md:hidden w-full transition-max-h duration-300 overflow-hidden ${open ? 'max-h-60' : 'max-h-0'}`}>
				<div className={`${isDark ? 'bg-[#121212]/95' : 'bg-white/95'} border-t border-[#ADB5BD]/10`}> 
					<div className="px-6 py-4 flex flex-col gap-2 text-sm font-bold uppercase">
						{Object.keys(t.nav).map((key) => (
							<button key={key} onClick={() => handleNavClick(key)} className="text-left py-2 hover:text-[#ADB5BD]">
								{t.nav[key]}
							</button>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
