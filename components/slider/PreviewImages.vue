<script setup lang="ts">
defineProps<{
	images: string[]
}>()
</script>

<template>
	<ClientOnly>
		<swiper-container
			class="swiper-portfolio-preview-images-slider size-full"
			:navigation="{ enabled: true }"
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
swiper-container.swiper-portfolio-preview-images-slider {
    --swiper-theme-color: var(--color-white);
    --swiper-pagination-bullet-inactive-color: var(--color-white);
    --swiper-pagination-bullet-inactive-opacity: 0.75;
}
swiper-container.swiper-portfolio-preview-images-slider::part(button-prev),
swiper-container.swiper-portfolio-preview-images-slider::part(button-next) {
  background-color: black;
  padding: 5px;
  border-radius: 10px;
}
swiper-container.swiper-portfolio-preview-images-slider::part(pagination) {
  background-color: black;
  padding: 2px 4px;
  border-radius: 5px;
}
swiper-container.swiper-portfolio-preview-images-slider::part(bullet-active) {
  background-color: red;
}
</style>