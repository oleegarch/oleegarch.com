<script setup lang="ts">
defineProps<{
	images: string[]
}>()
</script>

<template>
	<ClientOnly>
		<swiper-container
			class="swiper-portfolio-preview-images-slider size-full"
			:navigation="true"
			:pagination="{ dynamicBullets: true }"
		>
			<swiper-slide
				v-for="image in images"
				:key="image"
				:style="{ 'backgroundImage': `url(${image})` }"
				class="size-full bg-cover bg-no-repeat bg-center"
			/>
		</swiper-container>
	</ClientOnly>
</template>

<style lang="css">
.swiper-portfolio-preview-images-slider {
    --swiper-theme-color: var(--color-white);
    --swiper-pagination-bullet-inactive-color: var(--color-white);
    --swiper-pagination-bullet-inactive-opacity: 0.75;
}
</style>