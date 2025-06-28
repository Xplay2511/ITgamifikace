# 🚀 Návod na nasazení Gamifikace Informatika

Tento návod vás provede nasazením aplikace na internet, aby byla dostupná odkudkoliv.

## 📋 Předpoklady

- GitHub účet (zdarma)
- Node.js nainstalovaný lokálně (pro testování)

## 🎯 Možnosti nasazení

### 1. **Vercel (DOPORUČENO) - Nejjednodušší**

#### Krok 1: Připravte projekt
```bash
# Otestujte build lokálně
npm run build
```

#### Krok 2: Nahrajte na GitHub
1. Vytvořte nový repository na GitHub.com
2. Nahrajte kód:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VASE_USERNAME/gamifikace-informatika.git
git push -u origin main
```

#### Krok 3: Nasazení na Vercel
1. Jděte na [vercel.com](https://vercel.com)
2. Přihlaste se s GitHub účtem
3. Klikněte "New Project"
4. Vyberte váš repository
5. Klikněte "Deploy"

**Výhody Vercel:**
- ✅ Bezplatný hosting
- ✅ Automatické nasazení při push
- ✅ HTTPS automaticky
- ✅ Vynikající výkon
- ✅ Custom doména možná

### 2. **Netlify - Alternativa**

#### Krok 1: Připravte projekt
```bash
npm run build
```

#### Krok 2: Nahrajte na GitHub
(Stejné jako u Vercel)

#### Krok 3: Nasazení na Netlify
1. Jděte na [netlify.com](https://netlify.com)
2. Přihlaste se s GitHub účtem
3. Klikněte "New site from Git"
4. Vyberte váš repository
5. Nastavte:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Klikněte "Deploy site"

### 3. **GitHub Pages - Základní**

#### Krok 1: Upravte package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0"
  }
}
```

#### Krok 2: Nainstalujte gh-pages
```bash
npm install --save-dev gh-pages
```

#### Krok 3: Nasazení
```bash
npm run deploy
```

#### Krok 4: Aktivujte GitHub Pages
1. Jděte do repository settings
2. Scrollujte dolů na "Pages"
3. Vyberte "gh-pages" branch
4. Uložte

## 🔧 Konfigurace pro produkci

### Environment Variables (volitelné)
Pokud budete potřebovat environment variables:

**Vercel:**
1. Project Settings → Environment Variables
2. Přidejte potřebné proměnné

**Netlify:**
1. Site Settings → Environment Variables
2. Přidejte potřebné proměnné

### Custom doména (volitelné)
1. Kupte doménu (např. gamifikace-informatika.cz)
2. V nastavení platformy přidejte custom doménu
3. Nastavte DNS záznamy podle instrukcí

## 📱 Testování nasazení

Po nasazení otestujte:

1. **Přihlášení studenta** - vytvoření nového účtu
2. **Přihlášení učitele** - heslo: `ucitel2024`
3. **Funkce aplikace:**
   - Sbírání odznaků
   - Hry (Snake, Space Shooter)
   - Denní výzvy
   - Leaderboard
   - Avatar builder

## 🔒 Bezpečnost

- **Heslo učitele** je hardcoded v kódu - pro produkci zvažte změnu
- **Data** se ukládají v localStorage prohlížeči
- **Žádné backend** - vše běží v prohlížeči

## 📊 Monitoring

### Vercel Analytics
1. Vercel Dashboard → Analytics
2. Sledujte návštěvnost, výkon

### Netlify Analytics
1. Netlify Dashboard → Analytics
2. Sledujte návštěvnost

## 🚨 Řešení problémů

### Build selže
```bash
# Zkontrolujte lokální build
npm run build

# Zkontrolujte logy v dashboardu platformy
```

### Aplikace nefunguje
1. Zkontrolujte console v prohlížeči (F12)
2. Zkontrolujte network tab
3. Zkontrolujte localStorage

### Pomalé načítání
1. Zkontrolujte velikost bundle
2. Optimalizujte obrázky
3. Zkontrolujte CDN nastavení

## 📞 Podpora

- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Netlify:** [netlify.com/support](https://netlify.com/support)
- **GitHub:** [github.com/support](https://github.com/support)

## 🎉 Hotovo!

Po úspěšném nasazení bude vaše aplikace dostupná na:
- **Vercel:** `https://vas-projekt.vercel.app`
- **Netlify:** `https://vas-projekt.netlify.app`
- **GitHub Pages:** `https://vase-username.github.io/gamifikace-informatika`

Studenti se mohou přihlásit odkudkoliv a jejich pokrok se uloží v jejich prohlížeči! 