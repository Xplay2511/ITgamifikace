# 🎮 IT Gamifikace - Gamifikovaná výuka informatiky

**Moderní webová aplikace pro gamifikovanou výuku informatiky na základních školách**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.0.0-orange.svg)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-purple.svg)](https://vitejs.dev/)

## 📖 Obsah

- [O aplikaci](#-o-aplikaci)
- [Funkce](#-funkce)
- [Technologie](#-technologie)
- [Struktura projektu](#-struktura-projektu)
- [Instalace](#-instalace)
- [Konfigurace](#-konfigurace)
- [Použití](#-použití)
- [API Reference](#-api-reference)
- [Příspěvky](#-příspěvky)
- [Licence](#-licence)

## 🎯 O aplikaci

IT Gamifikace je moderní webová aplikace určená pro výuku informatiky na základních školách. Aplikace kombinuje vzdělávací obsah s herními prvky, aby motivovala studenty k učení a rozvoji digitálních dovedností.

### 🎨 Design filozofie
- **Retro-arcade styl** - Inspirováno klasickými arkádovými hrami
- **Responsive design** - Funguje na všech zařízeních
- **Přístupnost** - Respektuje standardy accessibility
- **Intuitivní UX** - Snadné ovládání pro děti

### 🎮 Herní mechaniky
- **XP systém** - Body za dokončené úkoly
- **Odznaky** - 25+ odznaků k získání
- **Žebříčky** - Soutěživost mezi studenty
- **Denní výzvy** - Pravidelné aktivity
- **Avatar systém** - Personalizace postavy

## ✨ Funkce

### 👨‍🎓 Pro studenty

#### 🎯 Hlavní funkce
- **Dashboard** - Přehled pokroku a aktivit
- **Denní výzvy** - Každodenní kvízy a úkoly
- **Témata** - Strukturovaný vzdělávací obsah
- **Odznaky** - Systém úspěchů a ocenění
- **Žebříček** - Porovnání s ostatními studenty

#### 🕹️ Minihry
- **Snake** - Klasická hra s IT tématikou
- **Space Shooter** - Vesmírná střílečka
- **TypingGame** - Rychlé psaní IT pojmů
- **Leaderboard** - Skóre všech her

#### 🎨 Personalizace
- **Avatar Builder** - Vytvoření vlastní postavy
- **Čepice** - Baseball, klobouk, koruna, čaroděj
- **Oblečení** - 9 barev triček
- **Vlasy** - 7 barev vlasů
- **Oči** - 5 barev očí
- **Doplňky** - Náhrdelníky a ozdoby

### 👨‍🏫 Pro učitele

#### 📊 Správa třídy
- **Seznam studentů** - Přehled všech žáků
- **Pokrok sledování** - XP, odznaky, skóre
- **Přidávání odznaků** - Manuální udělování
- **Mazání studentů** - Správa účtů

#### 🎯 Vzdělávací nástroje
- **Témata správa** - Vytváření nových témat
- **Kvízy** - Vlastní denní výzvy
- **Statistiky** - Detailní analýzy
- **Export dat** - Vývoz výsledků

### 🏆 Systém odznaků

#### 📚 Vzdělávací odznaky
- **Souborový šampion** - Organizace souborů
- **Mistr klávesnice** - Klávesové zkratky
- **Hardwarový expert** - Počítačové komponenty
- **Internetový navigátor** - Bezpečnost na internetu
- **Začínající programátor** - Základy programování

#### 🎮 Herní odznaky
- **Hadí mistr** - 20+ bodů ve Snake
- **Hadí legenda** - 50+ bodů ve Snake
- **Vesmírný obránce** - 10+ asteroidů
- **Vesmírný hrdina** - 50+ asteroidů
- **Rychlostní démon** - Výzva za <30s

#### 🌟 Speciální odznaky
- **První den** - Za první přihlášení
- **Týdenní bojovník** - 7 dní v řadě
- **Vytrvalý student** - 30 dní v řadě
- **Ranní ptáče** - Přihlášení před 8:00
- **Noční sova** - Přihlášení po 22:00

## 🛠️ Technologie

### Frontend
- **React 18.2.0** - Moderní UI knihovna
- **TypeScript 5.0** - Typová bezpečnost
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Vite 4.4.0** - Rychlý build tool

### Backend & Databáze
- **Firebase 10.0.0** - Backend-as-a-Service
- **Firestore** - NoSQL databáze
- **Firebase Auth** - Autentifikace
- **Firebase Hosting** - Web hosting

### Vývojové nástroje
- **ESLint** - Linting kódu
- **Prettier** - Formátování kódu
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Struktura projektu

```
gamifikace/
├── 📁 src/
│   ├── 📁 components/          # React komponenty
│   │   ├── AvatarBuilder.tsx   # Editor avatarů
│   │   ├── BadgeGrid.tsx       # Zobrazení odznaků
│   │   ├── BonusTasks.tsx      # Bonusové úkoly
│   │   ├── DailyQuest.tsx      # Denní výzvy
│   │   ├── Leaderboard.tsx     # Žebříček
│   │   ├── Login.tsx           # Přihlášení
│   │   ├── SnakeGame.tsx       # Hra Snake
│   │   ├── SpaceShooter.tsx    # Vesmírná střílečka
│   │   ├── StudentDashboard.tsx # Dashboard studenta
│   │   ├── TeacherDashboard.tsx # Dashboard učitele
│   │   ├── TopicGrid.tsx       # Témata
│   │   └── TypingGame.tsx      # Rychlé psaní
│   ├── 📁 data/                # Datové soubory
│   │   ├── firebase.ts         # Firebase konfigurace
│   │   └── initialData.ts      # Počáteční data
│   ├── 📁 services/            # Služby
│   │   └── firestoreService.ts # Firestore operace
│   ├── 📁 types/               # TypeScript typy
│   │   └── index.ts            # Definice typů
│   ├── 📁 utils/               # Utility funkce
│   │   └── initializeFirestore.ts # Inicializace DB
│   ├── App.tsx                 # Hlavní komponenta
│   ├── main.tsx                # Entry point
│   └── index.css               # Globální styly
├── 📁 public/                  # Statické soubory
├── 📄 firebase.json            # Firebase konfigurace
├── 📄 package.json             # Závislosti
├── 📄 tailwind.config.js       # Tailwind konfigurace
├── 📄 tsconfig.json            # TypeScript konfigurace
├── 📄 vite.config.ts           # Vite konfigurace
└── 📄 README.md                # Tento soubor
```

## 🚀 Instalace

### Předpoklady
- **Node.js** 18.0.0 nebo novější
- **npm** 9.0.0 nebo novější
- **Git** pro klonování repozitáře

### Kroky instalace

1. **Klonování repozitáře**
```bash
git clone https://github.com/Xplay2511/ITgamifikace.git
cd ITgamifikace
```

2. **Instalace závislostí**
```bash
npm install
```

3. **Konfigurace Firebase**
```bash
# Vytvořte projekt na Firebase Console
# Stáhněte firebaseConfig a upravte src/data/firebase.ts
```

4. **Spuštění vývojového serveru**
```bash
npm run dev
```

5. **Build pro produkci**
```bash
npm run build
```

## ⚙️ Konfigurace

### Firebase Setup

1. **Vytvořte projekt** na [Firebase Console](https://console.firebase.google.com/)
2. **Povolte služby**:
   - Authentication (Email/Password)
   - Firestore Database
   - Hosting
3. **Nastavte pravidla** pro Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Studenti mohou číst/psát pouze svá data
    match /students/{studentId} {
      allow read, write: if request.auth != null && 
        (request.auth.uid == studentId || 
         get(/databases/$(database)/documents/teachers/$(request.auth.uid)).data.role == 'teacher');
    }
    
    // Učitelé mohou číst všechna data
    match /{document=**} {
      allow read, write: if request.auth != null && 
        get(/databases/$(database)/documents/teachers/$(request.auth.uid)).data.role == 'teacher';
    }
  }
}
```

### Environment Variables

Vytvořte `.env` soubor v root adresáři:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🎮 Použití

### Pro studenty

1. **Registrace/Přihlášení**
   - Zadejte email a heslo
   - Vytvořte si avatar
   - Začněte s denní výzvou

2. **Denní aktivity**
   - Dokončete denní kvíz
   - Hrajte minihry
   - Sbírejte odznaky
   - Sledujte žebříček

3. **Personalizace**
   - Upravte si avatar
   - Změňte jméno
   - Sledujte pokrok

### Pro učitele

1. **Přihlášení**
   - Použijte: `teacher@itgamifikace.cz`
   - Heslo: `ucitel2024`

2. **Správa třídy**
   - Prohlížejte seznam studentů
   - Sledujte pokrok
   - Udělujte odznaky
   - Exportujte data

3. **Vzdělávací obsah**
   - Vytvářejte nová témata
   - Přidávejte kvízy
   - Nastavujte odměny

## 📚 API Reference

### Typy dat

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
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  code: string;
  unlocked: boolean;
  xpReward: number;
  unlockMethod: 'code' | 'quiz' | 'game' | 'daily';
}

interface AvatarSettings {
  hair: string;
  skinColor: string;
  shirtColor: string;
  eyes: string;
  mouth?: boolean;
  hat?: string;
  accessory?: string;
}
```

### Hlavní funkce

```typescript
// Autentifikace
const login = (email: string, password: string): Promise<User>
const register = (email: string, password: string): Promise<User>
const logout = (): Promise<void>

// Student data
const getStudent = (id: string): Promise<Student>
const updateStudent = (id: string, data: Partial<Student>): Promise<void>
const deleteStudent = (id: string): Promise<void>

// Badges
const unlockBadge = (studentId: string, badgeId: string): Promise<void>
const getBadges = (): Promise<Badge[]>

// Games
const updateSnakeScore = (studentId: string, score: number): Promise<void>
const updateSpaceScore = (studentId: string, score: number): Promise<void>
```

## 🤝 Příspěvky

Příspěvky jsou vítány! Prosím dodržujte tyto kroky:

1. **Fork** repozitáře
2. **Vytvořte feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** změny (`git commit -m 'Add some AmazingFeature'`)
4. **Push** do branch (`git push origin feature/AmazingFeature`)
5. **Otevřete Pull Request**

### Coding standards
- Používejte **TypeScript** pro všechny nové soubory
- Dodržujte **ESLint** pravidla
- Pište **komentáře** k složitějším funkcím
- Testujte na **různých zařízeních**

## 📄 Licence

Tento projekt je licencován pod **MIT License** - viz [LICENSE](LICENSE) soubor pro detaily.

## 🙏 Poděkování

- **React Team** za úžasnou knihovnu
- **Firebase Team** za backend služby
- **Tailwind CSS** za CSS framework
- **Vite** za rychlý build tool
- **Všem přispěvatelům** a testerům

## 📞 Kontakt

- **Autor**: IT Gamifikace Team
- **Email**: support@itgamifikace.cz
- **GitHub**: [https://github.com/Xplay2511/ITgamifikace](https://github.com/Xplay2511/ITgamifikace)
- **Live Demo**: [https://itgamifikace.web.app](https://itgamifikace.web.app)

---

⭐ **Pokud se vám projekt líbí, dejte mu hvězdičku na GitHubu!** ⭐ 