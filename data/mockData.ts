export const userData = {
  firstName: "Mario",
  level: 7,
  xp: 740,
  xpToNext: 1000,
  levelTitle: "Strike Master",
};

export const getLevelTitle = (level: number) => {
  const titles: { [key: number]: string } = {
    1: "Rookie",
    2: "Beginner",
    3: "Amateur",
    4: "Skilled",
    5: "Pro",
    6: "Expert",
    7: "Strike Master",
    8: "Champion",
    9: "Legend",
    10: "Hall of Fame",
  };
  return titles[level] || "Player";
};

// Aggiungi qui anche stats, challenges, ecc. (li facciamo dopo)
export const stats = {
  gamesPlayed: 47,
  average: 145,
  strikes: 312,
  lastPlayed: "3 days ago",
  trend: "up",
  avgScore: 145,
  strikeRate: 23,
  spareRate: 45,
};

export const challenges = [
  {
    id: "1",
    icon: "🎯",
    title: "Weekend Warrior",
    description: "Play 3 games this weekend",
    progress: 1,
    goal: 3,
    xpReward: 100,
    bonusReward: "10% off next session",
    timeLeft: "2 days left",
  },
  {
    id: "2",
    icon: "👥",
    title: "Social Butterfly",
    description: "Invite 2 new friends to play",
    progress: 0,
    goal: 2,
    xpReward: 150,
    bonusReward: "Free drink voucher",
    timeLeft: "5 days left",
  },
];

export const upcomingVisits = [
  {
    id: "1",
    date: "Sabato, 18 Gen",
    time: "20:00",
    center: "Bowling Milano",
    players: 5,
    lane: "Lane 12",
  },
];

export const recentHighlights = [
  {
    id: "1",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🎳",
    label: "Perfect Strike!",
    timeAgo: "3 days ago",
  },
  {
    id: "2",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🎉",
    label: "Group Fun",
    timeAgo: "1 week ago",
  },
  {
    id: "3",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🏆",
    label: "High Score",
    timeAgo: "2 weeks ago",
  },
  {
    id: "4",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🎳",
    label: "Perfect Strike!",
    timeAgo: "8 days ago",
  },
];

export const nearbyCenters = [
  {
    id: "1",
    name: "Bowling Milano",
    distance: "1.2 km",
    rating: 4.5,
    address: "Via Roma 123, Milano",
  },
  {
    id: "2",
    name: "Strike Zone",
    distance: "3.5 km",
    rating: 4.7,
    address: "Corso Venezia 45, Milano",
  },
];

export const recentGames = [
  { id: 1, date: "15 Gen 2025", center: "Bowling Milano", score: 178, isRecord: true },
  { id: 2, date: "12 Gen 2025", center: "Strike Zone", score: 156, isRecord: false },
  { id: 3, date: "08 Gen 2025", center: "Bowling Milano", score: 142, isRecord: false },
];