<template>
  <ClientOnly>
    <BackgroundParallaxParticles/>
  </ClientOnly>
  <NuxtLayout>
    <main class="relative z-2 flex items-start w-full max-w-[1200px] mx-auto text-white py-15">
      <GlassContainer class="sticky top-15 flex-1 min-w-60 mr-8 py-12">
        <div class="w-[50%] mx-auto">
          <NuxtImg
            class="w-full h-auto object-cover rounded-3xl"
            alt="Моё фото"
            src="/me.jpg"
          />
        </div>
        <div class="font-extrabold text-center mt-6 text-3xl">
          <span>Oleg Mikhailov</span>
        </div>
        <div class="flex justify-center mt-4">
          <div class="bg-white/12 rounded-md font-bold py-1 px-4 text-sm">
            <span>Full-stack <span class="text-sky-400">Web Developer</span></span>
          </div>
        </div>
        <LineSeparator class="my-8"/>
        <ClientOnly>
          <InfoRow
            icon="mdi:alternate-email"
            title="EMAIL"
            label="oleegarch.com@gmail.com"
          />
          <InfoRow
            icon="mdi:birthday-cake"
            title="BIRTHDAY"
            label="1 ноября, 2001"
            class="mt-6"
          />
          <InfoRow
            icon="mdi:location-multiple"
            title="LOCATION"
            label="Россия, Астрахань"
            class="mt-6"
          />
        </ClientOnly>
        <div class="flex justify-center mx-auto max-w-[85%] mt-6 gap-x-4">
          <a
            class="inline-flex"
            href="https://t.me/oleegarch"
            target="_blank"
            rel="noopener"
          >
            <Icon
              name="uil:telegram"
              size="36"
              class="text-gray-200 hover:text-white cursor-pointer"
            />
          </a>
          <a
            class="inline-flex"
            href="https://www.instagram.com/oleegarch"
            target="_blank"
            rel="noopener"
          >
            <Icon
              name="uil:instagram"
              size="36"
              class="text-gray-200 hover:text-white cursor-pointer"
            />
          </a>
          <a
            class="inline-flex"
            href="https://github.com/oleegarch"
            target="_blank"
            rel="noopener"
          >
            <Icon
              name="uil:github"
              size="36"
              class="text-gray-200 hover:text-white cursor-pointer"
            />
          </a>
        </div>
        <div class="absolute top-full left-1/2 -translate-x-1/2 text-nowrap text-center text-gray-400 text-xs">
          <span>* телеграм в приоритете</span>
        </div>
      </GlassContainer>
      <GlassContainer class="flex-shrink-0 max-w-[75%] p-8">
        <NuxtPage />
      </GlassContainer>
    </main>
  </NuxtLayout>
</template>