<script setup lang="ts">
import { skills } from '@/data/skills'
</script>

<template>
    <div class="mt-8">
        <span>За последние 6 лет я работал над собственными мини-проектами (VK/Telegram мини-аппы/боты), которые использовались пользователями и приносили доход. Я занимался всем: от идеи до деплоя, включая клиент, сервер, поддержку, развитие и монетизацию.</span>
    </div>
    <div class="mt-4">
        <span>Я всё время развивался сам: писал, читал, пробовал. Сейчас хочу прокачаться в командной разработке — и уверен, что быстро адаптируюсь. Я не боюсь фидбэка, и мне интересно расти дальше, перенимая лучшие практики.</span>
    </div>
    <div class="font-bold text-3xl mt-12">
        <span>Стек</span>
    </div>
    <div class="bg-yellow-500 rounded-md h-2 w-12 mt-4"/>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 gap-4">
        <div
            v-for="(skill, index) in skills"
            :key="index"
            class="bg-white/12 rounded-xl p-4"
        >
            <div class="mb-2">
                <UiProgressBar
                    :value="skill.value"
                    :title="skill.title"
                />
            </div>
            <div
                v-for="moduleSkill in skill.modules"
                :key="moduleSkill.title"
                class="flex items-center"
            >
                <div class="text-xs truncate w-[50%] text-gray-300">
                    <span>{{ moduleSkill.title }}</span>
                </div>
                <UiProgressBar
                    :value="moduleSkill.value"
                    class="flex-1"
                />
            </div>
        </div>
    </div>
</template>