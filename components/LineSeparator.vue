<script setup lang="ts">
defineProps<{
    vertical?: boolean
}>()
</script>

<template>
    <div
        :class="[
            'bg-white/20',
            (
                vertical
                    ? 'w-px self-stretch'
                    : 'h-px max-w-[85%] mx-auto'
            )
        ]"
    />
</template>