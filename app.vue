<template>
    <ClientOnly>
        <BackgroundParallaxParticles/>
    </ClientOnly>
    <NuxtLayout>
        <main class="
            relative z-2
            flex items-start
            w-full max-w-[580px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[980px] xl:max-w-[1200px]
            mx-auto py-15"
        >
            <LayoutSidebar
                class="
                    sticky top-15
                    w-full max-w-48 md:max-w-56 lg:max-w-64
                    mr-6 lg:mr-8 py-12
                "
            />
            <UiGlassContainer
                class="
                    flex-1 min-w-0
                    p-8
                "
            >
                <LayoutNavigation />
                <div class="bg-yellow-500 rounded-md h-2 w-12 mt-4"/>
                <NuxtPage />
            </UiGlassContainer>
        </main>
    </NuxtLayout>
</template>