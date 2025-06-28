import { Badge, Topic, Student, DailyQuest, TeacherSettings } from '../types';

export const initialBadges: Badge[] = [
  {
    id: 'file-champion',
    name: 'Souborový šampion',
    description: 'Umíš organizovat soubory a složky',
    icon: '📁',
    code: 'FILES123',
    unlocked: false,
    xpReward: 50,
    unlockMethod: 'code'
  },
  {
    id: 'keyboard-master',
    name: 'Mistr klávesnice',
    description: 'Rychle píšeš a znáš klávesové zkratky',
    icon: '⌨️',
    code: 'KEYBOARD456',
    unlocked: false,
    xpReward: 75,
    unlockMethod: 'code'
  },
  {
    id: 'hardware-expert',
    name: 'Hardwarový expert',
    description: 'Rozumíš počítačovým komponentám',
    icon: '💻',
    code: 'HARDWARE789',
    unlocked: false,
    xpReward: 100,
    unlockMethod: 'code'
  },
  {
    id: 'internet-navigator',
    name: 'Internetový navigátor',
    description: 'Bezpečně surfuješ po internetu',
    icon: '🌐',
    code: 'INTERNET101',
    unlocked: false,
    xpReward: 60,
    unlockMethod: 'code'
  },
  {
    id: 'snake-master',
    name: '🐍 Hadí mistr',
    description: 'Dosáhl jsi 20+ bodů ve hře Snake',
    icon: '🐍',
    code: 'snakepro20',
    unlocked: false,
    xpReward: 150,
    unlockMethod: 'game'
  },
  {
    id: 'space-defender',
    name: '🚀 Vesmírný obránce',
    description: 'Zničil jsi 10+ asteroidů ve Space Shooter',
    icon: '🚀',
    code: 'space10',
    unlocked: false,
    xpReward: 120,
    unlockMethod: 'game'
  },
  {
    id: 'quiz-champion',
    name: '🧠 Kvízový šampion',
    description: 'Splnil jsi 10 denních výzev',
    icon: '🧠',
    code: 'quiz10',
    unlocked: false,
    xpReward: 80,
    unlockMethod: 'daily'
  },
  {
    id: 'coding-beginner',
    name: 'Začínající programátor',
    description: 'První kroky v programování',
    icon: '💻',
    code: 'CODE2024',
    unlocked: false,
    xpReward: 200,
    unlockMethod: 'code'
  },
  {
    id: 'presentation-pro',
    name: 'Prezentační profesionál',
    description: 'Umíš vytvářet působivé prezentace',
    icon: '📊',
    code: 'PRESENT2024',
    unlocked: false,
    xpReward: 80,
    unlockMethod: 'code'
  },
  {
    id: 'data-wizard',
    name: 'Datový kouzelník',
    description: 'Mistr tabulek a grafů',
    icon: '📈',
    code: 'DATA2024',
    unlocked: false,
    xpReward: 90,
    unlockMethod: 'code'
  }
];

export const initialTopics: Topic[] = [
  {
    id: 'file-organization',
    name: 'Organizace souborů',
    description: 'Nauč se správně organizovat soubory a složky',
    icon: '📁',
    completed: false,
    xpReward: 30
  },
  {
    id: 'keyboard-shortcuts',
    name: 'Klávesové zkratky',
    description: 'Zrychli svou práci s klávesovými zkratkami',
    icon: '⌨️',
    completed: false,
    xpReward: 40
  },
  {
    id: 'computer-parts',
    name: 'Hardwarové komponenty',
    description: 'Poznej části počítače a jejich funkce',
    icon: '💻',
    completed: false,
    xpReward: 50
  },
  {
    id: 'internet-safety',
    name: 'Bezpečnost na internetu',
    description: 'Nauč se bezpečně používat internet',
    icon: '🔒',
    completed: false,
    xpReward: 35
  },
  {
    id: 'basic-programming',
    name: 'Základy programování',
    description: 'První kroky v programování',
    icon: '👨‍💻',
    completed: false,
    xpReward: 60
  },
  {
    id: 'presentations',
    name: 'Tvorba prezentací',
    description: 'Vytvářej působivé prezentace',
    icon: '📊',
    completed: false,
    xpReward: 45
  }
];

export const initialStudents: Student[] = [
  {
    id: '1',
    name: 'Tereza Nováková',
    avatar: {
      hair: 'brown',
      skinColor: 'light',
      shirtColor: 'blue',
      eyes: 'brown'
    },
    xp: 150,
    badges: ['file-champion'],
    snakeScore: 15,
    spaceScore: 8,
    stars: 3,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2'],
    totalQuestsCompleted: 2
  },
  {
    id: '2',
    name: 'Jan Svoboda',
    avatar: {
      hair: 'blonde',
      skinColor: 'medium',
      shirtColor: 'red',
      eyes: 'blue'
    },
    xp: 280,
    badges: ['file-champion', 'keyboard-master'],
    snakeScore: 25,
    spaceScore: 12,
    stars: 4,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2', 'quest3'],
    totalQuestsCompleted: 3
  },
  {
    id: '3',
    name: 'Anna Dvořáková',
    avatar: {
      hair: 'black',
      skinColor: 'dark',
      shirtColor: 'green',
      eyes: 'brown'
    },
    xp: 95,
    badges: [],
    snakeScore: 8,
    spaceScore: 5,
    stars: 2,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1'],
    totalQuestsCompleted: 1
  },
  {
    id: '4',
    name: 'Petr Černý',
    avatar: {
      hair: 'brown',
      skinColor: 'light',
      shirtColor: 'purple',
      eyes: 'green'
    },
    xp: 420,
    badges: ['file-champion', 'keyboard-master', 'hardware-expert'],
    snakeScore: 32,
    spaceScore: 18,
    stars: 5,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2', 'quest3', 'quest4'],
    totalQuestsCompleted: 4
  },
  {
    id: '5',
    name: 'Lucie Veselá',
    avatar: {
      hair: 'red',
      skinColor: 'medium',
      shirtColor: 'pink',
      eyes: 'blue'
    },
    xp: 200,
    badges: ['file-champion'],
    snakeScore: 18,
    spaceScore: 10,
    stars: 3,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2'],
    totalQuestsCompleted: 2
  }
];

export const initialDailyQuests: DailyQuest[] = [
  {
    id: 'quest1',
    question: 'Co je mozek počítače?',
    options: ['RAM', 'CPU', 'SSD', 'Zdroj'],
    correctAnswer: 1,
    xpReward: 5,
    icon: '🧠',
    category: 'hardware',
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'quest2',
    question: 'Která klávesová zkratka slouží k uložení souboru?',
    options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+S', 'Ctrl+X'],
    correctAnswer: 2,
    xpReward: 5,
    icon: '💾',
    category: 'keyboard',
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'quest3',
    question: 'Co znamená zkratka WWW?',
    options: ['World Wide Web', 'Web World Wide', 'Wide World Web', 'World Web Wide'],
    correctAnswer: 0,
    xpReward: 5,
    icon: '🌐',
    category: 'internet',
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'quest4',
    question: 'Který souborový formát se používá pro obrázky?',
    options: ['TXT', 'DOC', 'JPG', 'EXE'],
    correctAnswer: 2,
    xpReward: 5,
    icon: '🖼️',
    category: 'files',
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'quest5',
    question: 'Co je to antivirus?',
    options: ['Program na psaní', 'Program na ochranu', 'Program na hry', 'Program na kalkulačku'],
    correctAnswer: 1,
    xpReward: 5,
    icon: '🛡️',
    category: 'security',
    date: new Date().toISOString().split('T')[0]
  }
];

export const initialTeacherSettings: TeacherSettings = {
  badgeCodes: [
    {
      id: '1',
      code: 'FILES123',
      badgeId: 'file-champion',
      maxUses: 30,
      currentUses: 5,
      createdBy: 'teacher',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      code: 'KEYBOARD456',
      badgeId: 'keyboard-master',
      maxUses: 25,
      currentUses: 3,
      createdBy: 'teacher',
      createdAt: new Date().toISOString()
    }
  ],
  questSettings: {
    dailyQuestEnabled: true,
    questXpReward: 5,
    questCategories: ['hardware', 'keyboard', 'internet', 'files', 'security']
  },
  exportSettings: {
    includePersonalData: true,
    includeGameScores: true,
    includeQuestHistory: true
  }
};

export const avatarOptions = {
  hair: ['brown', 'blonde', 'black', 'red', 'gray'],
  skinColor: ['light', 'medium', 'dark'],
  shirtColor: ['blue', 'red', 'green', 'purple', 'pink', 'yellow', 'orange'],
  eyes: ['brown', 'blue', 'green', 'gray']
}; 