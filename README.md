# 🎮 IT Gamifikace - Vylepšená verze

Interaktivní vzdělávací platforma pro výuku IT s gamifikačními prvky, automatickými odznaky a vylepšenými tématy.

## ✨ Nové funkce v této verzi

### 🔄 Automatická denní výzva
- **Aktualizace každou půlnoc** - Nová denní výzva se automaticky vygeneruje každý den
- **Náhodný výběr** - Systém vybere náhodnou otázku z databáze pro každý den
- **Sledování splnění** - Kontrola, zda student již splnil dnešní výzvu

### 🏅 Automatické odznaky
- **Inteligentní systém** - Odznaky se odemykají automaticky na základě aktivit
- **Různé typy podmínek**:
  - `xp_threshold` - Nasbírání určitého množství XP
  - `login_streak` - Přihlášení po určitý počet dní v řadě
  - `badge_count` - Získání určitého počtu odznaků
  - `quest_count` - Splnění určitého počtu denních výzev
  - `game_score` - Dosažení určitého skóre ve hrách
  - `login_time` - Přihlášení v určitou denní dobu
  - `quest_speed` - Rychlé splnění denní výzvy
  - `help_count` - Pomoc spolužákům
  - `creative_projects` - Vytvoření vlastních projektů

### 📚 Vylepšená témata
- **Externí odkazy** - Každé téma má odkaz na studijní materiál
- **Obtížnost** - Témata mají různé úrovně obtížnosti (easy, medium, hard)
- **Časové odhady** - Odhad doby potřebné k dokončení
- **Interaktivní otázky** - Studenti musí odpovědět na otázku po prostudování materiálu
- **Kategorie** - Témata jsou rozdělena do kategorií (files, keyboard, hardware, security, programming, multimedia)

### 🎯 Příklady automatických odznaků
- **První den** - Za první přihlášení (25 XP)
- **Týdenní bojovník** - 7 dní v řadě (100 XP)
- **Sběratel XP** - 1000 XP (50 XP)
- **Lovce odznaků** - 5 odznaků (75 XP)
- **Hadí legenda** - 50+ bodů ve Snake (300 XP)
- **Vesmírný hrdina** - 50+ asteroidů (250 XP)
- **Ranní ptáče** - Přihlášení před 8:00 (40 XP)
- **Noční sova** - Přihlášení po 22:00 (40 XP)
- **Rychlostní démon** - Výzva za <30s (100 XP)
- **Vytrvalý student** - 30 dní v řadě (500 XP)

## 🚀 Instalace a nasazení

### 1. Klonování repozitáře
```bash
git clone https://github.com/vase-username/gamifikace.git
cd gamifikace
```

### 2. Instalace závislostí
```bash
npm install
```

### 3. Konfigurace Firebase
1. Vytvořte nový projekt na [Firebase Console](https://console.firebase.google.com)
2. Povolte Authentication (Email/Password)
3. Vytvořte Firestore Database
4. Zkopírujte konfiguraci do `src/data/firebase.ts`

### 4. Inicializace dat
```bash
npm run dev
```
Při prvním spuštění se automaticky vytvoří:
- Odznaky s automatickou logikou
- Témata s externími odkazy
- Denní výzvy
- Výchozí nastavení

### 5. Nasazení na Firebase Hosting
```bash
npm run build
firebase deploy
```

## 📊 Struktura dat

### Student
```typescript
interface Student {
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
  loginStreak: number;           // Nové
  lastLoginDate: string;         // Nové
  topicsCompleted: string[];     // Nové
  typingScore: number;           // Nové
  helpCount: number;             // Nové
  creativeProjects: number;      // Nové
}
```

### Badge s automatickou logikou
```typescript
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  code: string;
  unlocked: boolean;
  xpReward: number;
  unlockMethod: 'code' | 'quiz' | 'game' | 'daily' | 'automatic';
  autoUnlockCondition?: {
    type: 'xp_threshold' | 'login_streak' | 'badge_count' | 'quest_count' | 'game_score' | 'login_time' | 'quest_speed' | 'help_count' | 'creative_projects';
    value: number;
    description: string;
  };
}
```

### Vylepšené téma
```typescript
interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  completed: boolean;
  xpReward: number;
  externalLink?: string;         // Nové
  externalDescription?: string;  // Nové
  question?: string;             // Nové
  answer?: string;               // Nové
  difficulty: 'easy' | 'medium' | 'hard';  // Nové
  category: string;              // Nové
  estimatedTime: number;         // Nové
}
```

## 🔧 Technické detaily

### Automatické odznaky
- Kontrola se provádí při každé aktivitě (přihlášení, hry, splnění témat)
- Systém automaticky přiděluje XP a odemyká odznaky
- Notifikace o nových odznacích

### Denní výzvy
- Automatická generace nové výzvy každou půlnoc
- Náhodný výběr z databáze otázek
- Sledování splnění pro každého studenta

### Vylepšená témata
- Modal s externím odkazem a otázkou
- Validace odpovědi před splněním
- Různé obtížnosti a časové odhady

## 🎮 Použití

### Pro studenty
1. Registrace s e-mailem a heslem
2. Vytvoření avataru
3. Splnění denní výzvy
4. Procvičování témat s externími odkazy
5. Hraní her pro získání XP
6. Automatické získávání odznaků

### Pro učitele
1. Přihlášení s `teacher@itgamifikace.cz`
2. Přehled všech studentů
3. Správa odznaků a kódů
4. Export dat pro analýzu

## 🔒 Bezpečnost
- Firebase Authentication
- Firestore Security Rules
- Validace vstupů
- Bezpečné externí odkazy

## 📱 Kompatibilita
- Moderní prohlížeče (Chrome, Firefox, Safari, Edge)
- Responsive design pro mobilní zařízení
- Offline-ready s Service Workers

## 🚀 Nasazení na GitHub a Firebase

### 1. Push na GitHub
```bash
git add .
git commit -m "Vylepšená verze s automatickými odznaky a vylepšenými tématy"
git push origin main
```

### 2. Nasazení na Firebase
```bash
npm run build
firebase deploy
```

### 3. Ověření nasazení
1. Zkontrolujte Firebase Console
2. Otestujte nové funkce
3. Ověřte automatické odznaky
4. Zkontrolujte denní výzvy

## 🎯 Další vylepšení
- Push notifikace
- Offline režim
- Pokročilé analytiky
- Sociální funkce
- AI tutor

---

**Vytvořeno s ❤️ pro vzdělávání v IT** 