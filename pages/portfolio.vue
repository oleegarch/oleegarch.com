<script setup lang="ts">
import { portfolioItems } from '@/data/portfolio'
</script>

<template>
    <div
        v-for="item in portfolioItems"
        :key="item.name"
        class="bg-white/8 flex rounded-2xl overflow-hidden mt-8"
    >
        <div class="w-60 h-80 pr-8">
            <SliderPreviewImages
                :images="item.images"
            />
        </div>
        <div class="flex-1 min-w-0 py-8">
            <div class="flex items-center font-extrabold text-2xl">
                <span>{{ item.title }}</span>
                <a
                    v-if="item.link != null"
                    :href="item.link"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex click-top-shift ml-2"
                >
                    <Icon
                        name="mdi:web"
                        size="24"
                    />
                </a>
            </div>
            <div class="mt-2">
                <span>{{ item.description }}</span>
            </div>
            <div class="font-bold text-lg mt-6">
                <span>Стек:</span>
            </div>
            <SliderPortfolioStack
                v-if="item.stack.front != null"
                title="Frontend:"
                :stackItems="item.stack.front"
            />
            <SliderPortfolioStack
                v-if="item.stack.back != null"
                title="Backend:"
                :stackItems="item.stack.back"
            />
            <div class="flex items-center mt-6">
                <div class="font-bold mr-4">
                    <span>Доступно в:</span>
                </div>
                <div class="flex gap-x-2">
                    <UiSocialLink
                        v-for="link in item.links"
                        :key="link.url"
                        :href="link.url"
                        :icon="link.icon"
                        :image="link.image"
                    />
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