<script setup lang="ts">
const portfolioItems = [
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
				image: './logo/telegram.png',
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
				image: './logo/vk.png',
			},
			{
				url: 'https://t.me/smarterapp_bot',
				image: './logo/telegram.png',
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
				image: './logo/vk.png',
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
				image: './logo/vk.png',
			},
			{
				url: 'https://t.me/puzzlewords_bot',
				image: './logo/telegram.png',
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
				image: './logo/googleplay.png',
			},
			{
				url: 'https://www.rustore.ru/catalog/app/com.oleegarch.PuzzleWords',
				image: './logo/rustore.png',
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
</script>

<template>
    <div
        v-for="item in portfolioItems"
        :key="item.name"
        class="bg-white/8 flex rounded-2xl overflow-hidden mt-8"
    >
        <div class="pr-8">
            <ClientOnly>
                <swiper-container
                    class="swiper-portfolio w-50 h-88"
                    :navigation="true"
                    :pagination="{ dynamicBullets: true }"
                >
                    <swiper-slide
                        v-for="(image, i) in item.images"
                        :key="i"
                    >
                        <div
                            :style="{ 'backgroundImage': `url(${image})` }"
                            class="size-full bg-cover bg-no-repeat bg-center"
                            alt="Фото Проекта"
                        />
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
        <div class="py-8">
            <div class="font-extrabold text-2xl">
                <span>{{ item.title }}</span>
            </div>
            <div class="mt-2">
                <span>{{ item.description }}</span>
            </div>
            <div class="font-bold mt-6">
                <span>Стек:</span>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.swiper-portfolio {
    --swiper-theme-color: var(--color-white);
    --swiper-pagination-bullet-inactive-color: var(--color-white);
    --swiper-pagination-bullet-inactive-opacity: 0.75;
}
</style>