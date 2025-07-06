<script setup lang="ts">
defineProps<{
	stackItems: any | null[],
    title: string
}>()
</script>

<template>
    <div class="flex items-center mt-1">
        <div class="font-bold text-gray-200 text-xs mr-2">
            <span>{{ title }}</span>
        </div>
        <ClientOnly>
            <swiper-container
                class="w-flex-1 min-w-0 portrait:text-base landscape:text-xs landscape:md:text-sm landscape:lg:text-base text-nowrap select-none"
                :slides-per-view="'auto'"
                :space-between="10"
                :freeMode="{ enabled: true }"
            >
                <swiper-slide
                    v-for="stackItem in stackItems"
                    :key="stackItem.label"
                    class="w-fit"
                >
                    <div class="bg-white/20 text-white rounded-lg px-2">
                        <span>{{ stackItem.label }}</span>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </div>
</template>