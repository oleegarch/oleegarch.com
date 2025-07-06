<script setup lang="ts">
import { portfolioItems } from '@/data/portfolio'
</script>

<template>
    <div class="2xs:px-0 max-sm:px-4">
        <div
            v-for="item in portfolioItems"
            :key="item.name"
            class="
                flex items-center
                max-md:flex-col
                rounded-2xl
                overflow-hidden
                mt-8
                bg-white/8
            "
        >
            <div class="
                w-60 md:w-40 lg:w-60
                h-80 md:h-60 lg:h-80
                max-md:mt-4
                sm:pr-4 lg:pr-8"
            >
                <SliderPreviewImages
                    :images="item.images"
                />
            </div>
            <div
                class="
                    flex-1
                    w-full min-w-0
                    max-md:px-6
                    pb-4 pt-2 lg:py-8
                "
            >
                <div class="
                    font-extrabold
                    flex items-center
                    text-xl lg:text-2xl
                    pr-2"
                >
                    <span class="truncate">{{ item.title }}</span>
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
                <div class="
                    text-xs lg:text-sm xl:text-base
                    mt-2"
                >
                    <span>{{ item.description }}</span>
                </div>
                <div class="
                    font-bold
                    text-base lg:text-lg
                    mt-3 lg:mt-6"
                >
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
                <div class="
                    flex items-center
                    mt-3 lg:mt-6"
                >
                    <div class="
                        font-bold
                        text-sm lg:text-base
                        mr-2 lg:mr-4"
                    >
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
    </div>
</template>

<style lang="css">
.swiper-portfolio {
    --swiper-theme-color: var(--color-white);
    --swiper-pagination-bullet-inactive-color: var(--color-white);
    --swiper-pagination-bullet-inactive-opacity: 0.75;
}
</style>