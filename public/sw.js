const CACHE_NAME = 'gamifikace-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  '/src/components/StudentDashboard.tsx',
  '/src/components/BadgeGrid.tsx',
  '/src/components/TopicGrid.tsx',
  '/src/components/BonusTasks.tsx',
  '/src/components/Leaderboard.tsx',
  '/src/components/DailyQuest.tsx',
  '/src/components/SnakeGame.tsx',
  '/src/components/SpaceShooter.tsx',
  '/src/components/TypingGame.tsx',
  '/src/components/LevelUpAnimation.tsx',
  '/src/data/initialData.ts',
  '/src/types/index.ts',
  '/src/utils/initializeFirestore.ts',
  '/src/utils/soundEffects.ts'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 