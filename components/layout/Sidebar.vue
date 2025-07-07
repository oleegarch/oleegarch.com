<script setup lang="ts">
const { width } = import.meta.client ? useWindowSize() : { width: ref(0) }
const route = useRoute()
const fullInfoDefault = computed(() => width.value > 640)
const fullInfo = ref(true)

watch(route, () => fullInfo.value = fullInfoDefault.value)
onMounted(() => fullInfo.value = fullInfoDefault.value)
</script>

<template>
    <UiGlassContainer>
        <div class="w-[50%] mx-auto">
            <NuxtImg
                class="w-full h-auto object-cover rounded-3xl"
                alt="Моё фото"
                src="/images/me.jpg"
            />
        </div>
        <div class="font-extrabold text-center mt-6 text-3xl sm:text-xl md:text-2xl lg:text-3xl">
            <span>Oleg Mikhailov</span>
        </div>
        <div class="flex justify-center mt-4">
            <div class="bg-white/12 rounded-md font-bold py-1 px-4 text-lg sm:text-xs md:text-sm">
                <span>Full-stack <span class="text-sky-400">Web Developer</span></span>
            </div>
        </div>
        <template v-if="fullInfo">
            <UiLineSeparator class="my-8"/>
            <UiInfoRow
                icon="mdi:alternate-email"
                title="EMAIL"
                label="oleegarch.com@gmail.com"
            />
            <UiInfoRow
                icon="mdi:birthday-cake"
                title="BIRTHDAY"
                label="1 ноября, 2001"
                class="mt-6"
            />
            <UiInfoRow
                icon="mdi:location-multiple"
                title="LOCATION"
                label="Россия, Астрахань"
                class="mt-6"
            />
            <div class="flex justify-center mx-auto max-w-[85%] mt-6 gap-x-4">
                <UiSocialLink href="https://t.me/oleegarch" icon="uil:telegram" />
                <UiSocialLink href="https://www.instagram.com/oleegarch" icon="uil:instagram-alt" />
                <UiSocialLink href="https://github.com/oleegarch" icon="uil:github" />
            </div>
            <div class="absolute top-full left-1/2 -translate-x-1/2 text-nowrap text-center text-gray-400 text-xs">
                <span>* телеграм в приоритете</span>
            </div>
        </template>
        <div
            v-else
            class="
                absolute bottom-0 left-0 right-0
                flex justify-center
                w-full
                cursor-pointer
            "
            @click="fullInfo = true"
        >
            <Icon
                name="mdi:chevron-down"
                size="40"
            />
        </div>
    </UiGlassContainer>
</template>