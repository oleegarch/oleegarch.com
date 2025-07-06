<script setup lang="ts">
defineProps<{
    href: string
    icon?: string
    image?: string
}>()
</script>

<template>
    <a
        class="inline-flex click-top-shift"
        :href="href"
        target="_blank"
        rel="noopener"
    >
        <Icon
            v-if="icon != null"
            :name="icon"
            size="36"
            class="text-gray-200 hover:text-white"
        />
        <NuxtImg
            v-else-if="image != null"
            :src="image"
            width="36"
            height="36"
        />
    </a>
</template>