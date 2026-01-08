import React from 'react';
import { Sparkles, Layers, Gamepad2, CheckSquare, Layout } from 'lucide-react';

export const getProjects = (lang = 'tr') => [
	{
		id: 1,
		title: 'AI Image Generator',
		description: lang === 'tr' ? 'OpenAI API kullanarak metin açıklamalarından görsel oluşturan uygulama.' : 'Image generation app using OpenAI API.',
		tech: ['React', 'Axios', 'API Integration'],
		learning: lang === 'tr' ? 'Asenkron JavaScript ve API response handling konularında derinleştim.' : 'Deepened knowledge in Async JS and API handling.',
		github: 'https://github.com/GizzYii/AI-Image-Generator',
		icon: 'Sparkles'
	},
	{
		id: 2,
		title: '100 Mini Projects Frontend',
		description: lang === 'tr' ? 'Frontend becerilerini geliştirmek için hazırlanmış kapsamlı proje koleksiyonu.' : 'Comprehensive collection of projects to improve frontend skills.',
		tech: ['HTML5', 'CSS3', 'JavaScript'],
		learning: lang === 'tr' ? 'DOM manipülasyonu ve temel UI bileşenlerini uygulama pratiği kazandım.' : 'Gained practice in DOM manipulation and UI components.',
		github: 'https://github.com/GizzYii/100-mini-Projects-Frontend',
		icon: 'Layers'
	},
	{
		id: 3,
		title: 'Rock Paper Scissors Game',
		description: lang === 'tr' ? 'Klasik taş-kağıt-makas oyununun interaktif web versiyonu.' : 'Interactive web version of the classic rock-paper-scissors game.',
		tech: ['JavaScript', 'Game Logic', 'CSS'],
		learning: lang === 'tr' ? 'Oyun mantığı kurma ve durum (state) yönetimi konularında deneyim kazandım.' : 'Experienced in game logic and state management.',
		github: 'https://github.com/GizzYii/RockPaperScissorsGame',
		icon: 'Gamepad2'
	},
	{
		id: 4,
		title: 'Todo List App',
		description: lang === 'tr' ? 'Günlük görevleri yönetmek için geliştirilmiş kullanıcı dostu planlayıcı.' : 'User-friendly planner developed to manage daily tasks.',
		tech: ['HTML', 'JavaScript', 'Local Storage'],
		learning: lang === 'tr' ? 'Veri kalıcılığı için Local Storage kullanımını öğrendim.' : 'Learned how to use Local Storage for data persistence.',
		github: 'https://github.com/GizzYii/todolistapp.github.io',
		icon: 'CheckSquare'
	},
	{
		id: 5,
		title: 'Developer Learning Journal',
		description: lang === 'tr' ? 'Yazılım öğrenme sürecimi dokümante ettiğim interaktif günlüğüm.' : 'Documentation of my software learning journey.',
		tech: ['HTML5', 'CSS3', 'JavaScript'],
		learning: lang === 'tr' ? 'Teknik dokümantasyon ve hiyerarşik içerik yapısını pekiştirdim.' : 'Reinforced technical documentation skills.',
		github: 'https://github.com/GizzYii/Developer-Learning-Journal',
		icon: 'Layout'
	}
];

export default getProjects;
