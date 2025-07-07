<script setup lang="ts">
const tabs = [
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
        fixed bottom-0 left-0 right-0
        flex justify-around items-center
        bg-black/50
        border-1 border-solid border-gray-600
        backdrop-blur-lg backdrop-saturate-180
        h-16 z-50"
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