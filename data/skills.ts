export type SkillModule = {
    title: string,
    value: number
}
export type Skill = {
    title: string
    value: number
    modules: SkillModule[]
}

export const skills: Skill[] = [
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