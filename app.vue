<template>
  <ClientOnly>
    <BackgroundParallaxParticles/>
  </ClientOnly>
  <NuxtLayout>
    <main class="relative z-2 flex items-start w-full max-w-[1200px] mx-auto text-white py-15">
      <LayoutSidebar />
      <UiGlassContainer class="flex-shrink-0 w-[75%] max-w-[75%] p-8">
        <LayoutNavigation />
        <div class="bg-yellow-500 rounded-md h-2 w-12 mt-4"/>
        <NuxtPage />
      </UiGlassContainer>
    </main>
  </NuxtLayout>
</template>