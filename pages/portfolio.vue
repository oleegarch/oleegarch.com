<script setup lang="ts">
import { portfolioItems } from '@/data/portfolio'
</script>

<template>
    <div
        v-for="item in portfolioItems"
        :key="item.name"
        class="bg-white/8 flex rounded-2xl overflow-hidden mt-8"
    >
        <div class="w-50 h-88 pr-8">
            <PortfolioPreviewImagesSlider
                :images="item.images"
            />
        </div>
        <div class="flex-1 min-w-0 py-8">
            <div class="font-extrabold text-2xl">
                <span>{{ item.title }}</span>
            </div>
            <div class="mt-2">
                <span>{{ item.description }}</span>
            </div>
            <div class="font-bold text-lg mt-6">
                <span>Стек:</span>
            </div>
            <PortfolioStackSlider
                v-if="item.stack.front != null"
                title="frontend:"
                :stackItems="item.stack.front"
            />
            <PortfolioStackSlider
                v-if="item.stack.back != null"
                title="backend:"
                :stackItems="item.stack.back"
            />
            <div class="flex items-center mt-6">
                <div class="mr-4">
                    <span>Доступно в:</span>
                </div>
                <div class="flex gap-x-2">
                    <a
                        v-for="link in item.links"
                        :key="link.url"
                        class="inline-flex click-top-shift"
                        :href="link.url"
                        target="_blank"
                        rel="noopener"
                    >
                        <Icon
                            v-if="link.icon != null"
                            :name="link.icon"
                            size="36"
                            class="text-gray-200 hover:text-white"
                        />
                        <NuxtImg
                            v-else-if="link.image != null"
                            :src="link.image"
                            width="36"
                            height="36"
                        />
                    </a>
                </div>
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