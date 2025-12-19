import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeLanguageContext = createContext();

const translations = {
  en: {
    nav: {
      about: 'About',
      howItWorks: 'How It Works',
      why: 'Why $LID',
      vision: 'Vision',
      roadmap: 'Roadmap',
      launchApp: 'Launch App'
    },
    hero: {
      tagline: 'Vote. Predict. Earn.',
      subtitle: 'The community-driven vote-to-earn crypto experience',
      cta: 'Start Earning',
      learnMore: 'Learn More'
    },
    about: {
      title: 'What is $LID?',
      subtitle: 'Like & Dislike',
      description: '$LID is a fun and interactive crypto project built around one simple idea: You vote… you predict… and if you get it right, you earn.',
      appDescription: 'The Like & Dislike app lets users vote on different products, brands, gifts, or community choices. After the voting ends, the option that gets the highest support becomes the "winning choice."',
      reward: 'If you voted for the winning side — you receive $LID rewards.',
      tagline: 'Simple. Engaging. And fully community-driven.'
    },
    howItWorks: {
      title: 'How Do You Earn?',
      steps: [
        { num: '01', title: 'Vote Daily', desc: 'Vote on the daily images/products inside the app' },
        { num: '02', title: 'Predict', desc: 'Predict which side the majority will choose — Like 👍 or Dislike 👎' },
        { num: '03', title: 'Win', desc: 'If your prediction matches the final result → you receive $LID' },
        { num: '04', title: 'Repeat', desc: 'The more you play, the more you earn' }
      ],
      tagline: 'Vote-to-earn, powered by the community'
    },
    why: {
      title: 'Why $LID is Different',
      points: [
        { title: 'Real Utility', desc: 'Not just another meme coin — it has a real app & daily interaction' },
        { title: 'Community Driven', desc: 'The community decides the winners, not bots' },
        { title: 'Viral Potential', desc: 'Easy to use, addictive, and perfect for virality' },
        { title: 'Growing Ecosystem', desc: 'Future utilities will expand earning methods as the user base grows' }
      ]
    },
    vision: {
      title: 'Future Vision',
      subtitle: 'As the app grows, $LID aims to introduce:',
      items: [
        'Bigger voting events',
        'Brand collaborations',
        'Special reward pools',
        'Daily quests & streak bonuses',
        'More prediction games'
      ],
      tagline: 'The more users play, the more valuable the ecosystem becomes.'
    },
    footer: {
      rights: '© 2025 $LID. All rights reserved.',
      tagline: 'Vote. Predict. Earn.'
    }
  },
  ru: {
    nav: {
      about: 'О проекте',
      howItWorks: 'Как это работает',
      why: 'Почему $LID',
      vision: 'Видение',
      roadmap: 'Дорожная карта',
      launchApp: 'Открыть приложение'
    },
    hero: {
      tagline: 'Голосуй. Предсказывай. Зарабатывай.',
      subtitle: 'Крипто-экосистема с заработком через голосование',
      cta: 'Начать зарабатывать',
      learnMore: 'Узнать больше'
    },
    about: {
      title: 'Что такое $LID?',
      subtitle: 'Like & Dislike',
      description: '$LID — это увлекательный и интерактивный крипто-проект, построенный на одной простой идее: Голосуй… предсказывай… и если угадал — зарабатывай.',
      appDescription: 'Приложение Like & Dislike позволяет пользователям голосовать за различные продукты, бренды, подарки или выборы сообщества. После окончания голосования вариант с наибольшей поддержкой становится "победителем".',
      reward: 'Если вы проголосовали за победившую сторону — вы получаете награды в $LID.',
      tagline: 'Просто. Увлекательно. Полностью управляется сообществом.'
    },
    howItWorks: {
      title: 'Как заработать?',
      steps: [
        { num: '01', title: 'Голосуй ежедневно', desc: 'Голосуй за ежедневные изображения/продукты в приложении' },
        { num: '02', title: 'Предсказывай', desc: 'Предсказывай, какую сторону выберет большинство — Лайк 👍 или Дизлайк 👎' },
        { num: '03', title: 'Побеждай', desc: 'Если твоё предсказание совпало с результатом → ты получаешь $LID' },
        { num: '04', title: 'Повторяй', desc: 'Чем больше играешь, тем больше зарабатываешь' }
      ],
      tagline: 'Голосуй и зарабатывай вместе с сообществом'
    },
    why: {
      title: 'Почему $LID особенный',
      points: [
        { title: 'Реальная польза', desc: 'Не просто мем-коин — это реальное приложение с ежедневным взаимодействием' },
        { title: 'Сила сообщества', desc: 'Победителей определяет сообщество, а не боты' },
        { title: 'Вирусный потенциал', desc: 'Простой в использовании, затягивающий и идеальный для распространения' },
        { title: 'Растущая экосистема', desc: 'Новые способы заработка появляются с ростом пользовательской базы' }
      ]
    },
    vision: {
      title: 'Видение будущего',
      subtitle: 'По мере роста приложения, $LID планирует внедрить:',
      items: [
        'Масштабные голосования',
        'Коллаборации с брендами',
        'Специальные пулы наград',
        'Ежедневные квесты и бонусы за серии',
        'Больше игр с предсказаниями'
      ],
      tagline: 'Чем больше пользователей играет, тем ценнее становится экосистема.'
    },
    footer: {
      rights: '© 2025 $LID. Все права защищены.',
      tagline: 'Голосуй. Предсказывай. Зарабатывай.'
    }
  },
  es: {
    nav: {
      about: 'Acerca de',
      howItWorks: 'Cómo Funciona',
      why: 'Por qué $LID',
      vision: 'Visión',
      roadmap: 'Hoja de Ruta',
      launchApp: 'Abrir App'
    },
    hero: {
      tagline: 'Vota. Predice. Gana.',
      subtitle: 'La experiencia cripto de vota-y-gana impulsada por la comunidad',
      cta: 'Empieza a Ganar',
      learnMore: 'Saber Más'
    },
    about: {
      title: '¿Qué es $LID?',
      subtitle: 'Like & Dislike',
      description: '$LID es un proyecto cripto divertido e interactivo construido alrededor de una idea simple: Votas… predices… y si aciertas, ganas.',
      appDescription: 'La app Like & Dislike permite a los usuarios votar sobre diferentes productos, marcas, regalos o elecciones de la comunidad. Después de que termina la votación, la opción con más apoyo se convierte en la "opción ganadora".',
      reward: 'Si votaste por el lado ganador — recibes recompensas en $LID.',
      tagline: 'Simple. Atractivo. Y totalmente impulsado por la comunidad.'
    },
    howItWorks: {
      title: '¿Cómo Ganas?',
      steps: [
        { num: '01', title: 'Vota Diariamente', desc: 'Vota sobre las imágenes/productos diarios en la app' },
        { num: '02', title: 'Predice', desc: 'Predice qué lado elegirá la mayoría — Like 👍 o Dislike 👎' },
        { num: '03', title: 'Gana', desc: 'Si tu predicción coincide con el resultado final → recibes $LID' },
        { num: '04', title: 'Repite', desc: 'Cuanto más juegas, más ganas' }
      ],
      tagline: 'Vota-y-gana, impulsado por la comunidad'
    },
    why: {
      title: 'Por qué $LID es Diferente',
      points: [
        { title: 'Utilidad Real', desc: 'No es solo otra moneda meme — tiene una app real e interacción diaria' },
        { title: 'Comunidad', desc: 'La comunidad decide los ganadores, no los bots' },
        { title: 'Potencial Viral', desc: 'Fácil de usar, adictivo y perfecto para volverse viral' },
        { title: 'Ecosistema en Crecimiento', desc: 'Las utilidades futuras expandirán los métodos de ganancias' }
      ]
    },
    vision: {
      title: 'Visión Futura',
      subtitle: 'A medida que la app crece, $LID planea introducir:',
      items: [
        'Eventos de votación más grandes',
        'Colaboraciones con marcas',
        'Pools de recompensas especiales',
        'Misiones diarias y bonos por racha',
        'Más juegos de predicción'
      ],
      tagline: 'Cuantos más usuarios juegan, más valioso se vuelve el ecosistema.'
    },
    footer: {
      rights: '© 2025 $LID. Todos los derechos reservados.',
      tagline: 'Vota. Predice. Gana.'
    }
  }
};

export function ThemeLanguageProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const t = translations[language];

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  return useContext(ThemeLanguageContext);
}