<script setup lang="ts">
import { skills } from '@/data/skills'
const skillsChunks = chunk(skills, 2)
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
    <div
        v-for="(skillsChunk, index) in skillsChunks"
        :key="index"
        class="flex justify-between items-center w-full mt-8 gap-x-8"
    >
        <div
            v-for="skill in skillsChunk"
            :key="skill.title"
            class="bg-white/12 rounded-xl flex-1 transition-flex duration-200 shrink-0 p-4"
        >
            <div class="mb-2">
                <ProgressBar
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
                <ProgressBar
                    :value="moduleSkill.value"
                    class="flex-1"
                />
            </div>
        </div>
    </div>
</template>