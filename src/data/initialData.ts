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
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'game_score',
      value: 20,
      description: 'Dosáhni 20+ bodů ve hře Snake'
    }
  },
  {
    id: 'space-defender',
    name: '🚀 Vesmírný obránce',
    description: 'Zničil jsi 10+ asteroidů ve Space Shooter',
    icon: '🚀',
    code: 'space10',
    unlocked: false,
    xpReward: 120,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'game_score',
      value: 10,
      description: 'Znič 10+ asteroidů ve Space Shooter'
    }
  },
  {
    id: 'quiz-champion',
    name: '🧠 Kvízový šampion',
    description: 'Splnil jsi 10 denních výzev',
    icon: '🧠',
    code: 'quiz10',
    unlocked: false,
    xpReward: 80,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'quest_count',
      value: 10,
      description: 'Splň 10 denních výzev'
    }
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
  },
  {
    id: 'first-day',
    name: 'První den',
    description: 'Přihlásil ses poprvé do aplikace',
    icon: '🌟',
    code: 'FIRSTDAY',
    unlocked: false,
    xpReward: 25,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'login_streak',
      value: 1,
      description: 'Přihlas se poprvé do aplikace'
    }
  },
  {
    id: 'week-warrior',
    name: 'Týdenní bojovník',
    description: 'Přihlásil ses 7 dní v řadě',
    icon: '📅',
    code: 'WEEK7',
    unlocked: false,
    xpReward: 100,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'login_streak',
      value: 7,
      description: 'Přihlas se 7 dní v řadě'
    }
  },
  {
    id: 'xp-collector',
    name: 'Sběratel XP',
    description: 'Nasbíral jsi 1000 XP',
    icon: '💎',
    code: 'XP1000',
    unlocked: false,
    xpReward: 50,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'xp_threshold',
      value: 1000,
      description: 'Nasbírej 1000 XP'
    }
  },
  {
    id: 'badge-hunter',
    name: 'Lovce odznaků',
    description: 'Získal jsi 5 odznaků',
    icon: '🏆',
    code: 'BADGE5',
    unlocked: false,
    xpReward: 75,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'badge_count',
      value: 5,
      description: 'Získej 5 odznaků'
    }
  },
  {
    id: 'snake-legend',
    name: 'Hadí legenda',
    description: 'Dosáhl jsi 50+ bodů ve hře Snake',
    icon: '🐍👑',
    code: 'snake50',
    unlocked: false,
    xpReward: 300,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'game_score',
      value: 50,
      description: 'Dosáhni 50+ bodů ve hře Snake'
    }
  },
  {
    id: 'space-hero',
    name: 'Vesmírný hrdina',
    description: 'Zničil jsi 50+ asteroidů ve Space Shooter',
    icon: '🚀💫',
    code: 'space50',
    unlocked: false,
    xpReward: 250,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'game_score',
      value: 50,
      description: 'Znič 50+ asteroidů ve Space Shooter'
    }
  },
  {
    id: 'perfect-score',
    name: 'Perfektní skóre',
    description: 'Získal jsi 100% v denní výzvě',
    icon: '💯',
    code: 'PERFECT100',
    unlocked: false,
    xpReward: 150,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'quest_speed',
      value: 30,
      description: 'Dokonči denní výzvu za méně než 30 sekund'
    }
  },
  {
    id: 'avatar-designer',
    name: 'Designér avatarů',
    description: 'Vytvořil jsi unikátní avatar',
    icon: '🎨',
    code: 'AVATAR2024',
    unlocked: false,
    xpReward: 60,
    unlockMethod: 'code'
  },
  {
    id: 'social-butterfly',
    name: 'Společenský motýl',
    description: 'Interagoval jsi s 5+ spolužáky',
    icon: '🦋',
    code: 'SOCIAL5',
    unlocked: false,
    xpReward: 80,
    unlockMethod: 'code'
  },
  {
    id: 'early-bird',
    name: 'Ranní ptáče',
    description: 'Přihlásil ses před 8:00 ráno',
    icon: '🌅',
    code: 'EARLYBIRD',
    unlocked: false,
    xpReward: 40,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'login_time',
      value: 8,
      description: 'Přihlas se před 8:00 ráno'
    }
  },
  {
    id: 'night-owl',
    name: 'Noční sova',
    description: 'Přihlásil ses po 22:00',
    icon: '🦉',
    code: 'NIGHTOWL',
    unlocked: false,
    xpReward: 40,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'login_time',
      value: 22,
      description: 'Přihlas se po 22:00'
    }
  },
  {
    id: 'speed-demon',
    name: 'Rychlostní démon',
    description: 'Dokončil jsi denní výzvu za méně než 30 sekund',
    icon: '⚡',
    code: 'SPEED30',
    unlocked: false,
    xpReward: 100,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'quest_speed',
      value: 30,
      description: 'Dokonči denní výzvu za méně než 30 sekund'
    }
  },
  {
    id: 'persistent-learner',
    name: 'Vytrvalý student',
    description: 'Přihlásil ses 30 dní v řadě',
    icon: '📚',
    code: 'PERSISTENT30',
    unlocked: false,
    xpReward: 500,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'login_streak',
      value: 30,
      description: 'Přihlas se 30 dní v řadě'
    }
  },
  {
    id: 'helpful-friend',
    name: 'Pomocný přítel',
    description: 'Pomohl jsi 3 spolužákům s úkoly',
    icon: '🤝',
    code: 'HELPFUL3',
    unlocked: false,
    xpReward: 120,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'help_count',
      value: 3,
      description: 'Pomoz 3 spolužákům s úkoly'
    }
  },
  {
    id: 'creative-mind',
    name: 'Kreativní mysl',
    description: 'Vytvořil jsi vlastní téma nebo projekt',
    icon: '🎭',
    code: 'CREATIVE2024',
    unlocked: false,
    xpReward: 200,
    unlockMethod: 'automatic',
    autoUnlockCondition: {
      type: 'creative_projects',
      value: 1,
      description: 'Vytvoř vlastní projekt'
    }
  }
];

export const initialTopics: Topic[] = [
  {
    id: 'file-organization',
    name: 'Organizace souborů',
    description: 'Nauč se správně organizovat soubory a složky',
    icon: '📁',
    completed: false,
    xpReward: 30,
    difficulty: 'easy',
    category: 'files',
    estimatedTime: 15,
    externalLink: 'https://edu.gcfglobal.org/cs/windowsbasics/working-with-files/1/',
    externalDescription: 'Prostuduj si základy práce se soubory a složkami',
    question: 'Jaký je rozdíl mezi souborem a složkou?',
    answer: 'Soubor obsahuje data, složka organizuje soubory'
  },
  {
    id: 'keyboard-shortcuts',
    name: 'Klávesové zkratky',
    description: 'Zrychli svou práci s klávesovými zkratkami',
    icon: '⌨️',
    completed: false,
    xpReward: 40,
    difficulty: 'easy',
    category: 'keyboard',
    estimatedTime: 20,
    externalLink: 'https://support.microsoft.com/cs-cz/windows/kl%C3%A1vesov%C3%A9-zkratky-ve-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec',
    externalDescription: 'Nauč se nejdůležitější klávesové zkratky Windows',
    question: 'Jaká klávesová zkratka slouží k kopírování?',
    answer: 'Ctrl+C'
  },
  {
    id: 'computer-parts',
    name: 'Hardwarové komponenty',
    description: 'Poznej části počítače a jejich funkce',
    icon: '💻',
    completed: false,
    xpReward: 50,
    difficulty: 'medium',
    category: 'hardware',
    estimatedTime: 25,
    externalLink: 'https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers/xcae6f4a7ff015e7d:computer-components/a/computer-components-introduction',
    externalDescription: 'Seznam se s hlavními komponentami počítače',
    question: 'Co je to CPU a jakou má funkci?',
    answer: 'CPU je procesor, který zpracovává data a řídí počítač'
  },
  {
    id: 'internet-safety',
    name: 'Bezpečnost na internetu',
    description: 'Nauč se bezpečně používat internet',
    icon: '🔒',
    completed: false,
    xpReward: 35,
    difficulty: 'medium',
    category: 'security',
    estimatedTime: 30,
    externalLink: 'https://www.saferinternet.cz/',
    externalDescription: 'Základy bezpečnosti na internetu pro děti',
    question: 'Jak poznáš, že je web bezpečný?',
    answer: 'Podle HTTPS protokolu a zeleného zámku v adresním řádku'
  },
  {
    id: 'basic-programming',
    name: 'Základy programování',
    description: 'První kroky v programování',
    icon: '👨‍💻',
    completed: false,
    xpReward: 60,
    difficulty: 'hard',
    category: 'programming',
    estimatedTime: 45,
    externalLink: 'https://scratch.mit.edu/',
    externalDescription: 'Začni programovat s vizuálním jazykem Scratch',
    question: 'Co je to API a k čemu slouží?',
    answer: 'API je rozhraní, které umožňuje programům komunikovat mezi sebou'
  },
  {
    id: 'presentations',
    name: 'Tvorba prezentací',
    description: 'Vytvářej působivé prezentace',
    icon: '📊',
    completed: false,
    xpReward: 45,
    difficulty: 'medium',
    category: 'multimedia',
    estimatedTime: 35,
    externalLink: 'https://support.google.com/presentation/answer/4492226?hl=cs',
    externalDescription: 'Nauč se vytvářet prezentace v Google Slides',
    question: 'Kolik bodů by měl mít jeden slide prezentace?',
    answer: 'Maximálně 6-7 bodů pro lepší čitelnost'
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
    level: 1,
    badges: ['file-champion'],
    snakeScore: 15,
    spaceScore: 8,
    stars: 3,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2'],
    totalQuestsCompleted: 2,
    loginStreak: 3,
    lastLoginDate: new Date().toISOString(),
    topicsCompleted: ['file-organization'],
    typingScore: 45,
    helpCount: 1,
    creativeProjects: 0
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
    level: 1,
    badges: ['file-champion', 'keyboard-master'],
    snakeScore: 25,
    spaceScore: 12,
    stars: 4,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2', 'quest3'],
    totalQuestsCompleted: 3,
    loginStreak: 7,
    lastLoginDate: new Date().toISOString(),
    topicsCompleted: ['file-organization', 'keyboard-shortcuts'],
    typingScore: 78,
    helpCount: 2,
    creativeProjects: 1
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
    level: 1,
    badges: [],
    snakeScore: 8,
    spaceScore: 5,
    stars: 2,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1'],
    totalQuestsCompleted: 1,
    loginStreak: 1,
    lastLoginDate: new Date().toISOString(),
    topicsCompleted: [],
    typingScore: 32,
    helpCount: 0,
    creativeProjects: 0
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
    level: 2,
    badges: ['file-champion', 'keyboard-master', 'hardware-expert'],
    snakeScore: 32,
    spaceScore: 18,
    stars: 5,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2', 'quest3', 'quest4'],
    totalQuestsCompleted: 4,
    loginStreak: 12,
    lastLoginDate: new Date().toISOString(),
    topicsCompleted: ['file-organization', 'keyboard-shortcuts', 'computer-parts'],
    typingScore: 92,
    helpCount: 4,
    creativeProjects: 2
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
    level: 1,
    badges: ['file-champion'],
    snakeScore: 18,
    spaceScore: 10,
    stars: 3,
    lastActive: new Date().toISOString(),
    dailyQuestsCompleted: ['quest1', 'quest2'],
    totalQuestsCompleted: 2,
    loginStreak: 5,
    lastLoginDate: new Date().toISOString(),
    topicsCompleted: ['file-organization'],
    typingScore: 56,
    helpCount: 1,
    creativeProjects: 0
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