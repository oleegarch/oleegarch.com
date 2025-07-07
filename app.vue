<template>
    <ClientOnly>
        <BackgroundParallaxParticles/>
    </ClientOnly>
    <NuxtLayout>
        <main class="
            relative z-2
            flex flex-col justify-center sm:justify-start sm:items-start sm:flex-row
            w-full sm:max-w-[620px] md:max-w-[740px] lg:max-w-[980px] xl:max-w-[1200px]
            mx-auto py-15 2xs:px-0 px-8 sm:px-0"
        >
            <LayoutSidebar
                class="
                    sm:sticky sm:top-15
                    w-full sm:max-w-48 md:max-w-56 lg:max-w-64
                    mr-0 sm:mr-4 md:mr-6 lg:mr-8 py-12
                "
            />
            <UiGlassContainer
                class="
                    flex-1 min-w-0
                    sm:p-4 lg:p-8 mt-8 sm:mt-0
                    max-sm:mb-24 max-sm:pb-8
                "
            >
                <LayoutNavigation />
                <div class="bg-yellow-500 rounded-md h-2 w-12 mt-4 max-sm:ml-8"/>
                <NuxtPage />
            </UiGlassContainer>
        </main>
        <LayoutFooterTabs
            class="sm:hidden"
        />
    </NuxtLayout>
</template>