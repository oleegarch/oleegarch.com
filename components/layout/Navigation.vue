<script setup lang="ts">
const route = useRoute()
const routeNameToTitle: Record<string, string> = {
    'index': 'Обо мне',
    'portfolio': 'Портфолио'
}
const currentRouteTitle = computed(() => routeNameToTitle[route.name as string])
</script>

<template>
    <div
        class="
            flex items-stretch
            max-sm:hidden
            2xs:text-sm sm:text-lg md:text-2xl lg:text-4xl
        "
    >
        <NuxtLink
            to="/"
            class="click-top-shift font-bold py-2 px-6 rounded-md cursor-pointer"
            :class="{ 'bg-white/12': $route.name === 'index' }"
        >
            <span>{{ routeNameToTitle['index'] }}</span>
        </NuxtLink>
        <UiLineSeparator vertical class="mx-4"/>
        <NuxtLink
            to="/portfolio"
            class="click-top-shift font-bold py-2 px-6 rounded-md cursor-pointer"
            :class="{ 'bg-white/12': $route.name === 'portfolio' }"
        >
            <span>{{ routeNameToTitle['portfolio'] }}</span>
        </NuxtLink>
    </div>
    <div class="sm:hidden font-bold text-3xl px-8 pt-4">
        <span>{{ currentRouteTitle }}</span>
    </div>
</template>