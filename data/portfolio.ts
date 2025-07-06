
export type StackItem = {
    label: string
    hint?: string
}
export type Stack = {
    front: StackItem[] | null
    back: StackItem[] | null
}
export type Link = {
    url: string
    icon?: string
    image?: string
}
export type PortfolioItem = {
    name: string
	link?: string
    title: string
    description: string
    images: string[]
    links: Link[]
    stack: Stack
}
export const portfolioItems: PortfolioItem[] = [
    {
        name: 'bytecoin4',
        title: 'Bytecoin',
		description:
			'Клон VK Coin. Моя самая первая аппа и одновременно самая успешная. В VK теперь недоступна и воссоздана в телеграме.',
        images: [
            '/portfolio/bytecoin4/clawmachine.png',
            '/portfolio/bytecoin4/crash.png',
            '/portfolio/bytecoin4/dailyBonus.png',
            '/portfolio/bytecoin4/tasks.png'
        ],
		links: [
			{
				url: 'https://t.me/bytecoin4bot',
				icon: 'uil:telegram',
			},
		],
		stack: {
			front: [
				{ label: 'vue3' },
				{ label: 'vuex' },
				{ label: 'vue-router' },
				{ label: 'gsap', hint: 'Для анимаций' },
				{ label: 'chart.js', hint: 'Модуль для визуализации статистических графиков' },
				{ label: 'hammerjs', hint: 'Модуль для удобного использования сенсорных жестов' },
				{ label: 'tsparticles', hint: 'Используется для конфетти и не только' },
				{
					label: 'matter-js',
					hint: 'В игре присутствует мини-игра «Хватайка» написанная на этом модуле',
				},
				{
					label: 'ThreeJS',
					hint: 'Реализовывал 3D объекты под временный эвент на новый год',
				},
				{
					label: 'Своя UI библиотека',
					hint: 'Был реализован локальный UI фреймворк который затем использовался ещё в других проектах',
				},
			],
			back: [
				{ label: 'node.js' },
				{ label: 'MongoDB' },
				{ label: 'Redis' },
				{ label: 'mongoose', hint: 'Модуль для работы с MongoDB' },
				{ label: 'express', hint: 'Модуль для API' },
				{ label: 'socket.io', hint: 'Для связи в реальном времени' },
			],
		}
    },
    {
        name: 'smarter',
        title: 'Smarter',
		description:
            'Интеллектуальная игра. Повысь свой уровень интеллекта развлекательным путём!',
        images: [
            '/portfolio/smarter/1.png',
            '/portfolio/smarter/2.png',
            '/portfolio/smarter/3.png',
            '/portfolio/smarter/4.png',
            '/portfolio/smarter/5.png'
        ],
		links: [
			{
				url: 'https://vk.com/app51646634',
				icon: 'uil:vk',
			},
			{
				url: 'https://t.me/smarterapp_bot',
				icon: 'uil:telegram',
			},
		],
		stack: {
			front: [
				{ label: 'vue3' },
				{ label: 'vuex' },
				{ label: 'vue-router' },
				{ label: 'svgo', hint: 'Для иконок' },
				{ label: 'gsap', hint: 'Для анимаций' },
				{ label: 'hammerjs', hint: 'Модуль для удобного использования сенсорных жестов' },
				{
					label: 'html-to-image',
					hint: 'Создаём изображения чтобы поделиться в историю без серверной части',
				},
				{
					label: 'Своя UI библиотека',
					hint: 'Реализована своя UI библиотека подходящая под игровой стиль',
				},
			],
			back: [
				{ label: 'node.js' },
				{ label: 'MongoDB' },
				{ label: 'Redis' },
				{ label: 'mongoose', hint: 'Модуль для работы с MongoDB' },
				{ label: 'express', hint: 'Модуль для API' },
				{
					label: 'canvas',
					hint: 'Если фронтенд модуль html-to-image выдаёт ошибку, картинка для истории генерируется на серверной части',
				},
			],
		}
    },
    {
        name: 'richda2',
        title: 'Богатый Папа',
		description:
            'Ещё один кликер как и Bytecoin с немного большим количеством механик.',
        images: [
            '/portfolio/richda2/game.jpg',
            '/portfolio/richda2/improvements.jpg',
            '/portfolio/richda2/business.jpg',
            '/portfolio/richda2/game-console-dice.png',
            '/portfolio/richda2/games.jpg'
        ],
		links: [
			{
				url: 'https://vk.com/app8097523',
				icon: 'uil:vk',
			},
		],
		stack: {
			front: [
				{ label: 'vue2' },
				{ label: 'vuex' },
				{ label: 'vue-router' },
				{ label: 'svgo', hint: 'Для иконок' },
				{
					label: 'html-to-image',
					hint: 'Создаём изображения чтобы поделиться в историю без серверной части',
				},
				{ label: 'chart.js', hint: 'Модуль для визуализации статистических графиков' },
			],
			back: [
				{ label: 'node.js' },
				{ label: 'MongoDB' },
				{ label: 'Redis' },
				{ label: 'mongoose', hint: 'Модуль для работы с MongoDB' },
				{ label: 'express', hint: 'Модуль для API' },
				{ label: 'socket.io', hint: 'Для связи в реальном времени' },
			],
		}
    },
    {
        name: 'crossword',
        title: 'Пазлы Слов',
		description:
			'Словесная игра. Для каждого пользователя генерируются уникальные уровни. Бесконечное количество уровней с постоянной прогрессией сложности.',
        images: [
            '/portfolio/crossword/1.jpg',
            '/portfolio/crossword/2.jpg',
            '/portfolio/crossword/3.jpg'
        ],
		links: [
			{
				url: 'https://vk.com/app8138559',
				icon: 'uil:vk',
			},
			{
				url: 'https://t.me/puzzlewords_bot',
				icon: 'uil:telegram',
			},
		],
		stack: {
			front: [
				{ label: 'vue2' },
				{ label: 'vuex' },
				{ label: 'gsap', hint: 'Для анимаций' },
				{ label: 'D3', hint: 'Для анимации путешествия между стран' },
				{ label: 'confetti-js', hint: 'Для конфетти' },
			],
			back: [
				{ label: 'node.js' },
				{ label: 'MongoDB' },
				{ label: 'Redis' },
				{ label: 'mongoose', hint: 'Модуль для работы с MongoDB' },
				{ label: 'express', hint: 'Модуль для API' },
				{ label: 'socket.io', hint: 'Для связи в реальном времени' },
			],
		}
    },
    {
        name: 'puzzlewords',
		link: 'https://oleegarch.com/puzzlewords/',
        title: 'Пазлы Слов — Кроссворды',
		description:
			'Кроссворды. По 10 000+ уровней на английском и русском. Все кроссворды сгенерированы с помощью ChatGPT.',
        images: [
            '/portfolio/puzzlewords/1.jpg',
            '/portfolio/puzzlewords/2.jpg',
            '/portfolio/puzzlewords/3.jpg',
            '/portfolio/puzzlewords/4.jpg'
        ],
		links: [
			{
				url: 'https://play.google.com/store/apps/details?id=com.oleegarch.PuzzleWords',
				image: '/logos/googleplay.png',
			},
			{
				url: 'https://www.rustore.ru/catalog/app/com.oleegarch.PuzzleWords',
				image: '/logos/rustore.png',
			},
		],
		stack: {
			front: [
				{ label: 'Unity' },
				{ label: 'C#' },
				{ label: 'node.js', hint: 'Для генерации уровней' },
			],
			back: null,
		}
    }
];