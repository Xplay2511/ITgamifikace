# 🎮 Gamifikace Informatika - Cloudová verze

Moderní, vizuálně atraktivní a funkční webová aplikace pro gamifikovanou výuku informatiky pro 6. třídu gymnázia. Studenti sbírají odznaky a XP body za splněné úkoly v retro arcade stylu s pixelovými fonty, jasnými barvami a jednoduchými animacemi.

## ✨ Nové funkce - Cloudová synchronizace

### 🔥 Firebase integrace
- **Cloudová synchronizace** - pokrok studentů se ukládá do Firebase Firestore
- **Přihlášení odkudkoliv** - studenti se mohou přihlásit z jakéhokoliv zařízení
- **Bezpečná autentizace** - e-mail a heslo pro každého studenta
- **Automatické zálohování** - všechna data jsou bezpečně uložena v cloudu

### 👥 Uživatelské role
- **Studenti** - registrace s e-mailem a heslem, pokrok synchronizován
- **Učitel** - speciální účet `teacher@itgamifikace.cz` pro správu studentů

## 🚀 Rychlý start

### Předpoklady
- Node.js (verze 16 nebo vyšší)
- Firebase projekt (viz `FIREBASE_SETUP.md`)

### Instalace
```bash
# Klonování repozitáře
git clone <repository-url>
cd gamifikace

# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev
```

### Firebase nastavení
1. Vytvořte Firebase projekt na [console.firebase.google.com](https://console.firebase.google.com)
2. Povolte Authentication (Email/Password) a Firestore Database
3. Zkopírujte konfiguraci do `src/data/firebase.ts`
4. Nastavte Firestore pravidla podle `FIREBASE_SETUP.md`
5. Spusťte inicializaci dat

## 🎯 Funkce aplikace

### 👤 Student Dashboard
- **Avatar Builder** - vytvoření pixelového avatara s mnoha možnostmi
- **Badge Grid** - sbírání odznaků za různé úspěchy
- **Topic Grid** - průchod tématy s XP odměnami
- **Daily Quests** - denní výzvy s kvízovými otázkami
- **Bonus Tasks** - minihry pro získání odznaků

### 🎮 Minihry
- **Snake Game** - klasická hra hada s leaderboardem
- **Space Shooter** - střílečka s postupně se zvyšující obtížností
- **Životy a obtížnost** - systém životů a postupné zvyšování náročnosti

### 👨‍🏫 Teacher Dashboard
- **Správa studentů** - přehled všech studentů a jejich pokroku
- **Přidávání XP** - možnost přidat XP body studentům
- **Správa odznaků** - odemykání a odebírání odznaků
- **Export dat** - export všech dat do JSON souboru
- **Statistiky třídy** - přehled celkových statistik

### 🏆 Leaderboard
- **Snake skóre** - nejlepší výsledky ve hře Snake
- **Space Shooter skóre** - nejlepší výsledky ve Space Shooter
- **Aktualizace v reálném čase** - automatické aktualizace při nových skóre

## 🎨 Design a UX

### Retro Arcade Styl
- **Pixel fonty** - autentický retro vzhled
- **Neon barvy** - jasné, výrazné barvy
- **Animace** - plynulé přechody a efekty
- **Responsivní design** - funkční na všech zařízeních

### Avatar Builder
- **Více možností** - vlasy, pleť, oči, tričko, čepice, doplňky
- **Compact mód** - malý avatar v headeru
- **Full editor** - kompletní editor s náhledem

## 🔧 Technologie

### Frontend
- **React 18** - moderní React s hooks
- **TypeScript** - typově bezpečný kód
- **Tailwind CSS** - utility-first CSS framework
- **Vite** - rychlý build tool

### Backend & Databáze
- **Firebase Authentication** - bezpečné přihlašování
- **Firebase Firestore** - NoSQL databáze pro synchronizaci
- **Cloud hosting** - nasazení na Vercel/Netlify

## 📊 Datová struktura

### Student Data (Firestore)
```typescript
{
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
```

### Kolekce ve Firestore
- `students/{userId}` - data jednotlivých studentů
- `badges` - seznam všech odznaků
- `topics` - seznam všech témat
- `dailyQuests` - denní výzvy
- `leaderboards` - leaderboard data

## 🚀 Nasazení

### Lokální vývoj
```bash
npm run dev
```

### Produkční build
```bash
npm run build
```

### Nasazení na Vercel/Netlify
1. Nahrajte kód na GitHub
2. Propojte s Vercel/Netlify
3. Nastavte environment variables pro Firebase
4. Deploy!

## 🔒 Bezpečnost

### Firestore Rules
- Studenti mohou číst/zapisovat pouze svá data
- Učitel má přístup ke všem datům studentů
- Leaderboard je veřejný pro přihlášené uživatele

### Autentizace
- E-mail a heslo pro každého studenta
- Bezpečné Firebase Authentication
- Automatické odhlášení při neaktivitě

## 📱 Kompatibilita

### Prohlížeče
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Zařízení
- Desktop (Windows, macOS, Linux)
- Tablet (iPad, Android)
- Mobil (iPhone, Android)

## 🎯 Použití ve škole

### Pro studenty
1. **Registrace** - vytvoření účtu s e-mailem a heslem
2. **Přihlášení** - přístup k pokroku odkudkoliv
3. **Hraní** - sbírání XP, odznaků a řešení výzev
4. **Synchronizace** - pokrok se automaticky ukládá

### Pro učitele
1. **Přihlášení** - speciální účet `teacher@itgamifikace.cz`
2. **Monitoring** - sledování pokroku všech studentů
3. **Správa** - přidávání XP, odznaků, export dat
4. **Analýza** - statistiky třídy a výkonnosti

## 🚨 Řešení problémů

### Časté problémy
- **Firebase konfigurace** - zkontrolujte `src/data/firebase.ts`
- **Firestore pravidla** - ověřte nastavení v Firebase Console
- **Autentizace** - zkontrolujte povolení Email/Password v Authentication

### Logy a debugging
- Otevřete konzoli prohlížeče (F12)
- Zkontrolujte Firebase Console pro chyby
- Ověřte síťové požadavky v Network tab

## 📞 Podpora

### Dokumentace
- [Firebase Setup](FIREBASE_SETUP.md) - podrobný návod na nastavení
- [Deployment](DEPLOYMENT.md) - návod na nasazení

### Užitečné odkazy
- [Firebase Console](https://console.firebase.google.com)
- [Firebase Dokumentace](https://firebase.google.com/docs)
- [Vercel](https://vercel.com) - hosting
- [Netlify](https://netlify.com) - alternativní hosting

## 🎉 Závěr

Gamifikace Informatika je moderní, cloudově synchronizovaná aplikace pro motivující výuku informatiky. Studenti mohou pokračovat ve své práci odkudkoliv, učitelé mají přehled o pokroku celé třídy, a všechna data jsou bezpečně uložena v cloudu.

---

**Vytvořeno s ❤️ pro moderní výuku informatiky** 