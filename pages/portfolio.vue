<script setup lang="ts">
const portfolioItems = [
    {
        name: 'bytecoin4',
        images: [
            '/portfolio/bytecoin4/clawmachine.png',
            '/portfolio/bytecoin4/crash.png',
            '/portfolio/bytecoin4/dailyBonus.png',
            '/portfolio/bytecoin4/tasks.png'
        ]
    },
    {
        name: 'smarter',
        images: [
            '/portfolio/smarter/1.png',
            '/portfolio/smarter/2.png',
            '/portfolio/smarter/3.png',
            '/portfolio/smarter/4.png',
            '/portfolio/smarter/5.png'
        ]
    },
    {
        name: 'richda2',
        images: [
            '/portfolio/richda2/game.jpg',
            '/portfolio/richda2/improvements.jpg',
            '/portfolio/richda2/business.jpg',
            '/portfolio/richda2/game-console-dice.png',
            '/portfolio/richda2/games.jpg'
        ]
    },
    {
        name: 'crossword',
        images: [
            '/portfolio/crossword/1.jpg',
            '/portfolio/crossword/2.jpg',
            '/portfolio/crossword/3.jpg'
        ]
    },
    {
        name: 'puzzlewords',
        images: [
            '/portfolio/puzzlewords/1.jpg',
            '/portfolio/puzzlewords/2.jpg',
            '/portfolio/puzzlewords/3.jpg',
            '/portfolio/puzzlewords/4.jpg'
        ]
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
    </div>
</template>

<style lang="css">
.swiper-portfolio {
    --swiper-theme-color: var(--color-white);
    --swiper-pagination-bullet-inactive-color: var(--color-white);
    --swiper-pagination-bullet-inactive-opacity: 0.75;
}
</style>