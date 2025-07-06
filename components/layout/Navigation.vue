<template>
    <div class="flex items-stretch">
        <NuxtLink
            to="/"
            class="click-top-shift font-bold text-4xl py-2 px-6 rounded-md cursor-pointer"
            :class="{ 'bg-white/12': $route.name === 'index' }"
        >
            <span>Обо мне</span>
        </NuxtLink>
        <UiLineSeparator vertical class="mx-4"/>
        <NuxtLink
            to="/portfolio"
            class="click-top-shift font-bold text-4xl py-2 px-6 rounded-md cursor-pointer"
            :class="{ 'bg-white/12': $route.name === 'portfolio' }"
        >
            <span>Портфолио</span>
        </NuxtLink>
    </div>
</template>