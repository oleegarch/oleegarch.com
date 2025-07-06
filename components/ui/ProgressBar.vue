<script setup lang="ts">
defineOptions({
    inheritAttrs: false
})
defineProps<{
    value: number,
    title?: string
}>()

import { useAttrs } from 'vue'
const attrs = useAttrs()
</script>

<template>
    <div
        v-if="title"
        class="flex justify-between items-center mb-2"
    >
        <div class="font-bold">
            <span>{{ title }}</span>
        </div>
        <div class="text-gray-400">
            <span>{{ value }}%</span>
        </div>
    </div>
    <div
        class="Progress w-full h-2 bg-white/12 rounded-sm overflow-hidden"
        v-bind="attrs"
    >
        <div
            class="h-full bg-yellow-500"
            :style="{ 'width': value + '%' }"
        />
    </div>
</template>