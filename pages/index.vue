<script setup lang="ts">
const skills = [
    {
        title: 'JavaScript',
        value: 80,
        modules: [
            {
                title: 'Типы+События',
                value: 100
            },
            {
                title: 'Асинхронность',
                value: 100
            },
            {
                title: 'DOM',
                value: 90
            },
            {
                title: 'ES6+',
                value: 100
            },
            {
                title: 'Тестирование+Оптимизация',
                value: 80
            },
            {
                title: 'TypeScript',
                value: 10
            }
        ]
    },
    {
        title: 'Vue.js',
        value: 80,
        modules: [
            {
                title: 'Реактивность+Компоненты',
                value: 100
            },
            {
                title: 'Options API',
                value: 100
            },
            {
                title: 'Composition API',
                value: 80
            },
            {
                title: 'Vuex/Pinia',
                value: 80
            },
            {
                title: 'Vue-router',
                value: 60
            },
            {
                title: 'Nuxt/Quasar',
                value: 10
            }
        ]
    },
    {
        title: 'Node.js',
        value: 50,
        modules: [
            {
                title: 'REST API/express',
                value: 80
            },
            {
                title: 'WS/Socket.IO',
                value: 80
            },
            {
                title: 'Аутентификация+Безопасность',
                value: 50
            },
            {
                title: 'Многопоточность+Масштабирование',
                value: 50
            },
            {
                title: 'Деплой+CI/CD',
                value: 30
            },
            {
                title: 'Архитектура/Микросервисы',
                value: 5
            }
        ]
    },
    {
        title: 'MongoDB',
        value: 50,
        modules: [
            {
                title: 'CRUD+Aggregate',
                value: 70
            },
            {
                title: 'Индексы',
                value: 50
            },
            {
                title: 'Транзации+Консистентность',
                value: 50
            },
            {
                title: 'Масштабирование',
                value: 3
            },
            {
                title: 'Интеграция/mongoose',
                value: 80
            }
        ]
    },
    {
        title: 'Redis',
        value: 20,
        modules: [
            {
                title: 'Команды',
                value: 10
            },
            {
                title: 'Типы данных',
                value: 10
            },
            {
                title: 'Pub/Sub',
                value: 60
            },
            {
                title: 'Масштабирование',
                value: 3
            },
            {
                title: 'Интеграция/redis',
                value: 80
            }
        ]
    },
    {
        title: 'Unity (2D)',
        value: 50,
        modules: [
            {
                title: 'C#+.NET',
                value: 45
            },
            {
                title: 'Unity API',
                value: 80
            },
            {
                title: 'UI',
                value: 80
            },
            {
                title: 'Сцены+Объекты+InputSystem',
                value: 60
            },
            {
                title: 'Оптимизация+Addressables/Resources',
                value: 40
            }
        ]
    }
];
const skillsChunks = chunk(skills, 2)
</script>

<template>
    <div class="font-bold text-4xl">
        <span>Обо мне</span>
    </div>
    <div class="bg-yellow-500 rounded-md h-2 w-12 mt-4"/>
    <div class="mt-8">
        <span>За последние 6 лет я работал над собственными мини-проектами (VK/Telegram мини-аппы/боты), которые использовались пользователями и приносили доход. Я занимался всем: от идеи до деплоя, включая клиент, сервер, поддержку, развитие и монетизацию.</span>
    </div>
    <div class="mt-4">
        <span>Я всё время развивался сам: писал, читал, пробовал. Сейчас хочу прокачаться в командной разработке — и уверен, что быстро адаптируюсь. Я не боюсь фидбэка, и мне интересно расти дальше, перенимая лучшие практики.</span>
    </div>
    <div class="font-bold text-4xl mt-12">Стек</div>
    <div class="bg-yellow-500 rounded-md h-2 w-12 mt-4"/>
    <div
        v-for="(skillsChunk, index) in skillsChunks"
        :key="index"
        class="flex justify-between items-center w-full mt-8 gap-x-8"
    >
        <div
            v-for="skill in skillsChunk"
            :key="skill.title"
            class="AboutPage--skill bg-white/12 rounded-xl flex-1 transition-flex duration-200 shrink-0 p-4"
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
                class="AboutPage--skill-module flex items-center"
            >
                <div class="AboutPage--skill-module-title text-xs truncate w-[50%] text-gray-300">
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