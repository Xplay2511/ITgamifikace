// Zvukové efekty pomocí Web Audio API
export class SoundEffects {
  private audioContext: AudioContext | null = null;

  constructor() {
    // Inicializace AudioContext při prvním přehrání
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Level-up zvuk (krátká fanfára)
  playLevelUp() {
    if (!this.audioContext) return;

    try {
      // Vytvoření oscilátoru pro základní tón
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      // Nastavení frekvence a typu vlny
      oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime); // A4
      oscillator.frequency.setValueAtTime(554, this.audioContext.currentTime + 0.1); // C#5
      oscillator.frequency.setValueAtTime(659, this.audioContext.currentTime + 0.2); // E5
      oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime + 0.3); // A5
      
      oscillator.type = 'sine';

      // Nastavení hlasitosti (fade in/out)
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.4);

      // Spuštění a zastavení
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.4);
    } catch (error) {
      console.log('Zvuk není podporován v tomto prohlížeči');
    }
  }

  // XP získání zvuk (krátký ping)
  playXpGain() {
    if (!this.audioContext) return;

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
      oscillator.type = 'square';

      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.1);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Zvuk není podporován v tomto prohlížeči');
    }
  }

  // Badge unlock zvuk (speciální efekt)
  playBadgeUnlock() {
    if (!this.audioContext) return;

    try {
      const oscillator1 = this.audioContext.createOscillator();
      const oscillator2 = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator1.frequency.setValueAtTime(523, this.audioContext.currentTime); // C5
      oscillator2.frequency.setValueAtTime(659, this.audioContext.currentTime); // E5
      
      oscillator1.type = 'triangle';
      oscillator2.type = 'triangle';

      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, this.audioContext.currentTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.3);

      oscillator1.start(this.audioContext.currentTime);
      oscillator2.start(this.audioContext.currentTime);
      oscillator1.stop(this.audioContext.currentTime + 0.3);
      oscillator2.stop(this.audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('Zvuk není podporován v tomto prohlížeči');
    }
  }
}

// Singleton instance
export const soundEffects = new SoundEffects(); 