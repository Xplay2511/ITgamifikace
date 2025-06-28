import { setDoc, doc } from 'firebase/firestore';
import { db } from '../data/firebase';
import { initialBadges, initialTopics, initialDailyQuests } from '../data/initialData';

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