import { setDoc, doc } from 'firebase/firestore';
import { db } from '../data/firebase';
import { initialBadges, initialTopics, initialDailyQuests } from '../data/initialData';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc, query, where } from 'firebase/firestore';
import { initialStudents, initialTeacherSettings } from '../data/initialData';

export const initializeFirestore = async () => {
  try {
    console.log('Inicializace Firestore dat...');

    // Přidání odznaků
    for (const badge of initialBadges) {
      await setDoc(doc(db, 'badges', badge.id), badge);
    }
    console.log('✅ Odznaky přidány');

    // Přidání témat
    for (const topic of initialTopics) {
      await setDoc(doc(db, 'topics', topic.id), topic);
    }
    console.log('✅ Témata přidána');

    // Přidání denních výzev
    for (const quest of initialDailyQuests) {
      await setDoc(doc(db, 'dailyQuests', quest.id), quest);
    }
    console.log('✅ Denní výzvy přidány');

    console.log('🎉 Firestore inicializace dokončena!');
  } catch (error) {
    console.error('Chyba při inicializaci Firestore:', error);
  }
};

// Funkce pro výpočet levelu na základě XP
export const calculateLevel = (xp: number): number => {
  // Každých 300 XP = nový level
  return Math.floor(xp / 300) + 1;
};

// Funkce pro výpočet XP potřebných na další level
export const getXpForNextLevel = (currentLevel: number): number => {
  return currentLevel * 300;
};

// Funkce pro výpočet XP v aktuálním levelu
export const getXpInCurrentLevel = (xp: number): number => {
  const currentLevel = calculateLevel(xp);
  const xpForCurrentLevel = (currentLevel - 1) * 300;
  return xp - xpForCurrentLevel;
}; 