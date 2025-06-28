# 🔥 Firebase Setup - Gamifikace Informatika

Tento návod vás provede nastavením Firebase pro cloudovou synchronizaci dat studentů.

## 📋 Předpoklady

- Firebase projekt již vytvořen (ITgamifikace)
- Web API Key: `AIzaSyBPfo4YVc6PFgVyhrE3GZjJI0mFulpBKDc`
- Project ID: `itgamifikace`

## 🚀 Krok 1: Firebase Console Nastavení

### 1.1 Povolení Authentication
1. Jděte na [Firebase Console](https://console.firebase.google.com)
2. Vyberte projekt `ITgamifikace`
3. V levém menu klikněte na **Authentication**
4. Klikněte na **Get started**
5. V záložce **Sign-in method** povolte **Email/Password**
6. Klikněte na **Save**

### 1.2 Povolení Firestore Database
1. V levém menu klikněte na **Firestore Database**
2. Klikněte na **Create database**
3. Vyberte **Start in test mode** (pro vývoj)
4. Vyberte umístění databáze (např. `europe-west3`)
5. Klikněte na **Done**

### 1.3 Nastavení pravidel Firestore
1. V Firestore Database klikněte na **Rules**
2. Nahraďte pravidla následujícím kódem:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Studenti mohou číst a zapisovat pouze svá data
    match /students/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Učitel může číst všechna data studentů
    match /students/{document=**} {
      allow read: if request.auth != null && request.auth.token.email == 'teacher@itgamifikace.cz';
    }
    
    // Všichni přihlášení mohou číst odznaky, témata a výzvy
    match /badges/{document} {
      allow read: if request.auth != null;
    }
    
    match /topics/{document} {
      allow read: if request.auth != null;
    }
    
    match /dailyQuests/{document} {
      allow read: if request.auth != null;
    }
    
    // Všichni přihlášení mohou číst a zapisovat leaderboard
    match /leaderboards/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Klikněte na **Publish**

## 🎯 Krok 2: Vytvoření učitele

### 2.1 Registrace učitele
1. Spusťte aplikaci lokálně (`npm run dev`)
2. Klikněte na **Nemám účet – registrace**
3. Zadejte e-mail: `teacher@itgamifikace.cz`
4. Zadejte heslo (např. `ucitel2024`)
5. Klikněte na **Registrovat**

### 2.2 Ověření učitele
- Učitel bude automaticky rozpoznán podle e-mailu `teacher@itgamifikace.cz`
- Bude mít přístup ke všem datům studentů

## 📊 Krok 3: Inicializace dat

### 3.1 Spuštění inicializace
1. Otevřete konzoli prohlížeče (F12)
2. Vložte následující kód:

```javascript
// Import inicializační funkce
import { initializeFirestore } from './src/utils/initializeFirestore.js';

// Spuštění inicializace
initializeFirestore();
```

### 3.2 Ověření dat
1. Jděte do Firebase Console → Firestore Database
2. Měli byste vidět kolekce:
   - `badges` - odznaky
   - `topics` - témata
   - `dailyQuests` - denní výzvy
   - `students` - data studentů (prázdné)
   - `leaderboards` - leaderboard data (prázdné)

## 👥 Krok 4: Testování

### 4.1 Registrace studenta
1. Odhlaste se z učitele
2. Klikněte na **Nemám účet – registrace**
3. Zadejte e-mail studenta (např. `student@test.cz`)
4. Zadejte heslo
5. Klikněte na **Registrovat**

### 4.2 Ověření synchronizace
1. Student se přihlásí a uvidí výchozí avatar
2. Získá nějaké XP nebo odznak
3. Odhlaste se a přihlaste znovu
4. Data by měla být zachována

## 🔒 Bezpečnost

### Produkční pravidla
Pro produkci doporučuji upravit Firestore pravidla:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Přísnější pravidla pro produkci
    match /students/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /students/{document=**} {
      allow read: if request.auth != null && 
        (request.auth.token.email == 'teacher@itgamifikace.cz' || 
         request.auth.token.email_verified == true);
    }
    
    // Ostatní pravidla...
  }
}
```

## 🚨 Řešení problémů

### Chyba: "Firebase App named '[DEFAULT]' already exists"
- Zkontrolujte, zda není Firebase inicializován vícekrát
- Restartujte aplikaci

### Chyba: "Missing or insufficient permissions"
- Zkontrolujte Firestore pravidla
- Ověřte, zda je uživatel přihlášen

### Data se nenačítají
- Zkontrolujte konzoli prohlížeče pro chyby
- Ověřte, zda jsou data ve Firestore
- Zkontrolujte Firebase konfiguraci

## 📞 Podpora

- **Firebase Console:** [console.firebase.google.com](https://console.firebase.google.com)
- **Firebase Dokumentace:** [firebase.google.com/docs](https://firebase.google.com/docs)
- **Firestore Rules:** [firebase.google.com/docs/firestore/security/get-started](https://firebase.google.com/docs/firestore/security/get-started)

## 🎉 Hotovo!

Po dokončení setupu budou data studentů synchronizována v cloudu a dostupná odkudkoliv! 