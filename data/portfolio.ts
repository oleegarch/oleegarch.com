
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
            '/images/portfolio/bytecoin4/clawmachine.png',
            '/images/portfolio/bytecoin4/crash.png',
            '/images/portfolio/bytecoin4/dailyBonus.png',
            '/images/portfolio/bytecoin4/tasks.png'
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
        name: 'slaves',
        title: 'Рабство',
		description:
			'Реферальная игра, где игрок, перешедший по твоей ссылке, становится твоим рабом, на котором ты впоследствии зарабатываешь монеты.',
        images: [
            '/images/portfolio/slaves/referral.png',
            '/images/portfolio/slaves/toplist.png'
        ],
		links: [
			{
				url: 'https://t.me/slaverygame_bot',
				icon: 'uil:telegram',
			},
		],
		stack: {
			front: [
				{ label: 'vue3' },
				{ label: 'pinia' },
				{ label: 'vue-router' },
				{ label: 'gsap', hint: 'Для анимаций' },
				{ label: 'tsparticles', hint: 'Используется для конфетти' },
				{ label: 'hammerjs', hint: 'Модуль для удобного использования сенсорных жестов' },
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
            '/images/portfolio/smarter/1.png',
            '/images/portfolio/smarter/2.png',
            '/images/portfolio/smarter/3.png',
            '/images/portfolio/smarter/4.png',
            '/images/portfolio/smarter/5.png'
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
            '/images/portfolio/richda2/game.jpg',
            '/images/portfolio/richda2/improvements.jpg',
            '/images/portfolio/richda2/business.jpg',
            '/images/portfolio/richda2/game-console-dice.png',
            '/images/portfolio/richda2/games.jpg'
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
            '/images/portfolio/crossword/1.jpg',
            '/images/portfolio/crossword/2.jpg',
            '/images/portfolio/crossword/3.jpg'
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
            '/images/portfolio/puzzlewords/1.jpg',
            '/images/portfolio/puzzlewords/2.jpg',
            '/images/portfolio/puzzlewords/3.jpg',
            '/images/portfolio/puzzlewords/4.jpg'
        ],
		links: [
			{
				url: 'https://play.google.com/store/apps/details?id=com.oleegarch.PuzzleWords',
				image: '/images/logos/googleplay.png',
			},
			{
				url: 'https://www.rustore.ru/catalog/app/com.oleegarch.PuzzleWords',
				image: '/images/logos/rustore.png',
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