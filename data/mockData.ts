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