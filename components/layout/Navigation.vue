<template>
    <div class="flex items-stretch text-base sm:text-lg md:text-2xl lg:text-4xl">
        <NuxtLink
            to="/"
            class="click-top-shift font-bold py-2 px-6 rounded-md cursor-pointer"
            :class="{ 'bg-white/12': $route.name === 'index' }"
        >
            <span>Обо мне</span>
        </NuxtLink>
        <UiLineSeparator vertical class="mx-4"/>
        <NuxtLink
            to="/portfolio"
            class="click-top-shift font-bold py-2 px-6 rounded-md cursor-pointer"
            :class="{ 'bg-white/12': $route.name === 'portfolio' }"
        >
            <span>Портфолио</span>
        </NuxtLink>
    </div>
</template>