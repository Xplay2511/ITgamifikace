# 🚀 Instrukce pro nasazení vylepšené IT Gamifikace

## 📋 Přehled změn

### ✅ Opravené problémy
1. **Denní výzva** - Nyní se aktualizuje každou půlnoc automaticky
2. **Automatické odznaky** - Odznaky se odemykají na základě aktivit, ne jen kódů
3. **Vylepšená témata** - Externí odkazy a interaktivní otázky místo jednoduchého kliknutí

### 🆕 Nové funkce
- Automatické odemykání odznaků při splnění podmínek
- Login streak systém (sledování po sobě jdoucích přihlášení)
- Vylepšená témata s externími odkazy a otázkami
- Různé obtížnosti témat (easy, medium, hard)
- Časové odhady pro dokončení témat

## 🔧 Příprava k nasazení

### 1. Kontrola změn
```bash
git status
git diff
```

### 2. Testování lokálně
```bash
npm run dev
```

Ověřte:
- ✅ Denní výzva se načítá správně
- ✅ Automatické odznaky fungují
- ✅ Vylepšená témata s modaly
- ✅ Login streak se aktualizuje

### 3. Build aplikace
```bash
npm run build
```

## 📤 Nasazení na GitHub

### 1. Commit změn
```bash
git add .
git commit -m "Vylepšená verze: automatické odznaky, denní výzvy, vylepšená témata

- Oprava denní výzvy - aktualizace každou půlnoc
- Automatické odznaky na základě aktivit
- Vylepšená témata s externími odkazy a otázkami
- Login streak systém
- Různé obtížnosti témat"
```

### 2. Push na GitHub
```bash
git push origin main
```

### 3. Ověření na GitHub
- Zkontrolujte, že všechny soubory jsou nahrány
- Ověřte, že commit obsahuje všechny změny

## 🔥 Nasazení na Firebase

### 1. Přihlášení do Firebase
```bash
firebase login
```

### 2. Kontrola konfigurace
```bash
firebase projects:list
firebase use your-project-id
```

### 3. Nasazení
```bash
firebase deploy
```

### 4. Ověření nasazení
- Zkontrolujte URL aplikace
- Otestujte všechny nové funkce
- Ověřte, že data se ukládají správně

## 🧪 Testování po nasazení

### 1. Testování denní výzvy
1. Přihlaste se jako student
2. Splňte denní výzvu
3. Odhlaste se a přihlaste se znovu
4. Ověřte, že se zobrazuje nová výzva (pokud je nový den)

### 2. Testování automatických odznaků
1. Přihlaste se jako nový student
2. Získejte nějaké XP (hra, téma, denní výzva)
3. Ověřte, že se automaticky odemkly odznaky:
   - "První den" - při prvním přihlášení
   - "Sběratel XP" - při dosažení 1000 XP
   - "Hadí mistr" - při dosažení 20+ bodů ve Snake

### 3. Testování vylepšených témat
1. Klikněte na téma s externím odkazem
2. Otevřete studijní materiál
3. Zkuste odpovědět na otázku
4. Ověřte, že téma se splní pouze při správné odpovědi

### 4. Testování login streak
1. Přihlaste se několik dní v řadě
2. Ověřte, že se odemkne odznak "Týdenní bojovník" po 7 dnech

## 🔍 Kontrola dat v Firebase Console

### 1. Firestore Database
Zkontrolujte kolekce:
- `students` - nová pole pro sledování aktivit
- `badges` - automatické odznaky s podmínkami
- `topics` - vylepšená témata s externími odkazy
- `dailyQuests` - denní výzvy s daty

### 2. Authentication
- Ověřte, že se studenti mohou registrovat
- Zkontrolujte, že učitel má přístup

### 3. Hosting
- Ověřte, že aplikace běží na správné URL
- Zkontrolujte, že všechny soubory jsou nahrány

## 🚨 Řešení problémů

### Problém: Denní výzva se neaktualizuje
**Řešení:**
1. Zkontrolujte, že `getTodaysQuest()` funkce se volá
2. Ověřte, že datum se porovnává správně
3. Zkontrolujte Firestore pravidla

### Problém: Automatické odznaky se neodemýkají
**Řešení:**
1. Zkontrolujte, že `checkAndUnlockAutomaticBadges()` se volá
2. Ověřte podmínky v `autoUnlockCondition`
3. Zkontrolujte, že student má správná data

### Problém: Vylepšená témata nefungují
**Řešení:**
1. Ověřte, že `TopicGrid` komponenta je správně importována
2. Zkontrolujte, že témata mají všechna nová pole
3. Ověřte, že modaly se zobrazují správně

### Problém: Build selže
**Řešení:**
1. Zkontrolujte TypeScript chyby
2. Ověřte, že všechny importy jsou správné
3. Zkontrolujte, že všechny typy jsou definované

## 📊 Monitoring po nasazení

### 1. Firebase Analytics
- Sledujte aktivitu uživatelů
- Ověřte, že nové funkce se používají

### 2. Firestore Usage
- Sledujte čtení a zápisy
- Ověřte, že data se ukládají efektivně

### 3. Performance
- Sledujte dobu načítání
- Ověřte, že aplikace je rychlá

## 🎯 Další kroky

### Krátkodobé (1-2 týdny)
- Sběr feedbacku od uživatelů
- Oprava případných bugů
- Optimalizace performance

### Střednědobé (1-2 měsíce)
- Implementace push notifikací
- Přidání nových témat
- Rozšíření automatických odznaků

### Dlouhodobé (3+ měsíce)
- AI tutor
- Pokročilé analytiky
- Sociální funkce

## 📞 Podpora

Pokud narazíte na problémy:
1. Zkontrolujte Firebase Console
2. Ověřte konzoli prohlížeče
3. Zkontrolujte Network tab
4. Ověřte Firestore pravidla

---

**Úspěšné nasazení! 🎉** 