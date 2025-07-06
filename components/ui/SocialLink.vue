<script setup lang="ts">
defineProps<{
    href: string
    icon: string
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
            :name="icon"
            size="36"
            class="text-gray-200 hover:text-white"
        />
    </a>
</template>