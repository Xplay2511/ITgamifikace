export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  code: string;
  unlocked: boolean;
  xpReward: number;
  unlockMethod: 'code' | 'quiz' | 'game' | 'daily';
  maxUses?: number;
  expiresAt?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  completed: boolean;
  xpReward: number;
}

export interface Student {
  id: string;
  name: string;
  avatar: AvatarSettings;
  xp: number;
  badges: string[];
  snakeScore: number;
  spaceScore: number;
  stars: number;
  lastActive: string;
  dailyQuestsCompleted: string[];
  totalQuestsCompleted: number;
}

export interface AvatarSettings {
  hair: string;
  skinColor: string;
  shirtColor: string;
  eyes: string;
  mouth?: boolean;
  hat?: string;
  accessory?: string;
}

export interface DailyQuest {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  xpReward: number;
  icon: string;
  category: string;
  date: string;
}

export interface SnakeScore {
  name: string;
  score: number;
  date: string;
}

export interface SpaceScore {
  name: string;
  score: number;
  date: string;
}

export interface GameState {
  snake: {
    snake: number[][];
    food: number[];
    direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
    score: number;
    gameOver: boolean;
  };
  space: {
    player: { x: number; y: number };
    bullets: Array<{ x: number; y: number }>;
    asteroids: Array<{ x: number; y: number; size: number }>;
    score: number;
    gameOver: boolean;
    lives: number;
  };
}

export interface AppState {
  currentUser: string | null;
  isTeacher: boolean;
  students: Student[];
  badges: Badge[];
  topics: Topic[];
  dailyQuests: DailyQuest[];
  snakeLeaderboard: SnakeScore[];
  spaceLeaderboard: SpaceScore[];
  gameState: GameState;
  teacherSettings: TeacherSettings;
}

export interface TeacherSettings {
  badgeCodes: BadgeCode[];
  questSettings: QuestSettings;
  exportSettings: ExportSettings;
}

export interface BadgeCode {
  id: string;
  code: string;
  badgeId: string;
  maxUses: number;
  currentUses: number;
  expiresAt?: string;
  createdBy: string;
  createdAt: string;
}

export interface QuestSettings {
  dailyQuestEnabled: boolean;
  questXpReward: number;
  questCategories: string[];
}

export interface ExportSettings {
  includePersonalData: boolean;
  includeGameScores: boolean;
  includeQuestHistory: boolean;
}

export interface Teacher {
  username: string;
  password: string;
  permissions: string[];
} 