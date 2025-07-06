<template>
    <UiGlassContainer>
        <div class="w-[50%] mx-auto">
            <NuxtImg
                class="w-full h-auto object-cover rounded-3xl"
                alt="Моё фото"
                src="/me.jpg"
            />
        </div>
        <div class="font-extrabold text-center mt-6 text-xl md:text-2xl lg:text-3xl">
            <span>Oleg Mikhailov</span>
        </div>
        <div class="flex justify-center mt-4">
            <div class="bg-white/12 rounded-md font-bold py-1 px-4 text-xs md:text-sm">
                <span>Full-stack <span class="text-sky-400">Web Developer</span></span>
            </div>
        </div>
        <ClientOnly>
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
        </ClientOnly>
        <div class="flex justify-center mx-auto max-w-[85%] mt-6 gap-x-4">
            <UiSocialLink href="https://t.me/oleegarch" icon="uil:telegram" />
            <UiSocialLink href="https://www.instagram.com/oleegarch" icon="uil:instagram-alt" />
            <UiSocialLink href="https://github.com/oleegarch" icon="uil:github" />
        </div>
        <div class="absolute top-full left-1/2 -translate-x-1/2 text-nowrap text-center text-gray-400 text-xs">
            <span>* телеграм в приоритете</span>
        </div>
    </UiGlassContainer>
</template>