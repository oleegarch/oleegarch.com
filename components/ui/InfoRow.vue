<script setup lang="ts">
import copyText from 'copy-text-to-clipboard'

defineProps<{
  icon: string
  title: string,
  label: string
}>()

const wasCopiedNow = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

function copy(label : string) {
    if(!import.meta.client) return;

    copyText(label)

    wasCopiedNow.value = true

    if(timeoutId != null) {
        clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
        wasCopiedNow.value = false
        timeoutId = null
    }, 500)
}
</script>

<template>
    <div class="
        flex items-center
        mx-auto max-w-[85%]
    ">
        <div class="
            inline-flex items-center justify-center flex-shrink-0
            w-12 h-12
            bg-white/12
            rounded-xl
        ">
            <Icon
                :name="icon"
                size="24"
                class="block"
            />
        </div>
        <div class="ml-4 min-w-0">
            <div class="truncate select-none text-sm text-gray-400">
                <span>{{ title }}</span>
            </div>
            <div
                class="truncate click-top-shift cursor-pointer select-none"
                :class="{ 'text-green-400': wasCopiedNow }"
                @click="copy(label)"
            >
                <span>{{ wasCopiedNow ? 'Copied!' : label }}</span>
            </div>
        </div>
    </div>
</template>