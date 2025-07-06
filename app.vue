<template>
    <ClientOnly>
        <BackgroundParallaxParticles/>
    </ClientOnly>
    <NuxtLayout>
        <main class="
            relative z-2
            flex items-start
            w-full sm:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1200px]
            mx-auto py-15"
        >
            <LayoutSidebar
                class="
                    sticky top-15
                    shrink-0 min-w-54
                    mr-8 py-12
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