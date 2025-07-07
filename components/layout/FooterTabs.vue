<script setup lang="ts">
type RouteTab = {
    name: string
    to: string
    label: string
    icon: string
}
const tabs: RouteTab[] = [
    {
        name: 'index',
        to: '/',
        label: 'Обо мне',
        icon: 'mdi:account-badge-outline'
    },
    {
        name: 'portfolio',
        to: '/portfolio',
        label: 'Портфолио',
        icon: 'mdi:briefcase-account-outline'
    }
]
</script>

<template>
    <nav class="
        FooterTabs
        fixed bottom-0 left-0 right-0
        flex justify-around items-center
        bg-black/50
        border-t-1 border-solid border-gray-600
        backdrop-blur-md backdrop-saturate-180
        h-16 z-50
        safe-bottom"
    >
        <NuxtLink
            v-for="tab in tabs"
            :key="tab.name"
            :to="tab.to"
            class="
                flex flex-col items-center justify-center
                text-xs transition text-gray-300 hover:text-gray-200
            "
            :class="{ 'text-yellow-500 font-semibold': $route.name === tab.name }"
        >
            <Icon
                :name="tab.icon"
                size="24"
            />
            <span>{{ tab.label }}</span>
        </NuxtLink>
    </nav>
</template>

<style>
.FooterTabs.h-16 {
    height: calc(var(--spacing) * 16 + var(--vueuse-safe-area-bottom, 0px));
}
</style>